export type Msg =
  | Created
  | Toggled
  | Removed
  | TodosRequested
  | TodosReceived
  | TodosRequestFailed

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

export interface TodosReceived {
  type: "todosReceived",
  payload: { [id: string]: { text: string, completed: boolean } }
}

export interface TodosRequested {
  type: "todosRequested",
  payload: { retries: number }
}

export interface TodosRequestFailed {
  type: "todosRequestFailed",
  payload: { error: string }
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

export const todosReceived = (payload: TodosReceived['payload']): TodosReceived => ({
  type: 'todosReceived', payload
})

export const todosRequested = (payload: TodosRequested['payload']): TodosRequested => ({
  type: 'todosRequested', payload
})

export const todosRequestFailed = (payload: TodosRequestFailed['payload']): TodosRequestFailed => ({
  type: 'todosRequestFailed', payload
})
