export type Msg =
  | Created
  | Toggled
  | Removed
  | Load
  | Loaded

export interface Created {
  type: 'created',
  payload: { id: string, text: string }
}

export interface Toggled {
  type: 'toggled',
  payload: { id: string, completed: boolean }
}

export interface Removed {
  type: 'removed',
  payload: { id: string }
}

export interface Load {
  type: "load",
  payload: null
}

export interface Loaded {
  type: "loaded",
  payload: { [id: string]: { text: string, completed: boolean } }
}

export const created = (payload: Created['payload']): Created => ({
  type: 'created', payload
})

export const toggled = (payload: Toggled['payload']): Toggled => ({
  type: 'toggled', payload
})

export const removed = (payload: Removed['payload']): Removed => ({
  type: 'removed', payload
})

export const load = (payload: Load['payload']): Load => ({
  type: 'load', payload
})

export const loaded = (payload: Loaded['payload']): Loaded => ({
  type: 'loaded', payload
})
