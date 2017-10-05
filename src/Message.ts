export type Msg =
  | TodoCreated
  | TodoToggled
  | TodoRemoved
  | TodosRequested
  | TodosReceived
  | TodosRequestFailed


export interface TodoCreated {
  readonly type: 'TodoCreated',
  readonly payload: Readonly<{
    id: string,
    text: string
  }>
}

export interface TodoToggled {
  readonly type: 'TodoToggled',
  readonly payload: Readonly<{
    id: string,
    completed: boolean
  }>
}

export interface TodoRemoved {
  readonly type: 'TodoRemoved',
  readonly payload: Readonly<{
    id: string
  }>
}

export interface TodosReceived {
  readonly type: 'TodosReceived',
  readonly payload: {
    readonly [id: string]: Readonly<{
      text: string,
      completed: boolean
    }>
  }
}

export interface TodosRequested {
  readonly type: 'TodosRequested',
  readonly payload: Readonly<{
    retries: number
  }>
}

export interface TodosRequestFailed {
  readonly type: 'TodosRequestFailed',
  readonly payload: Readonly<{
    error: string
  }>
}

export const todoCreated = (payload: TodoCreated['payload']): TodoCreated => ({
  type: 'TodoCreated', payload
})

export const todoToggled = (payload: TodoToggled['payload']): TodoToggled => ({
  type: 'TodoToggled', payload
})

export const todoRemoved = (payload: TodoRemoved['payload']): TodoRemoved => ({
  type: 'TodoRemoved', payload
})

export const todosReceived = (payload: TodosReceived['payload']): TodosReceived => ({
  type: 'TodosReceived', payload
})

export const todosRequested = (payload: TodosRequested['payload']): TodosRequested => ({
  type: 'TodosRequested', payload
})

export const todosRequestFailed = (payload: TodosRequestFailed['payload']): TodosRequestFailed => ({
  type: 'TodosRequestFailed', payload
})
