import { State as Todo } from './State/Todo'

export type Msg =
  | RequestTodos
  | TodosReceived
  | RemoveTodo
  | TodoRemoved
  | AddTodo
  | AddTodoInput
  | TodoAdded


export interface RequestTodos {
  type: "RequestTodos"
}

export const requestTodos = (): RequestTodos => ({
  type: "RequestTodos"
})

export interface AddTodoInput {
  type: "AddTodoInput"
  payload: string
}

export const addTodoInput = (payload: AddTodoInput['payload']): AddTodoInput => ({
  type: "AddTodoInput", payload
})

export interface TodosReceived {
  type: "TodosReceived",
  payload: Todo[]
}

export const todosReceived = (payload: TodosReceived['payload']): TodosReceived => ({
  type: "TodosReceived", payload
})

export interface RemoveTodo {
  type: "RemoveTodo",
  payload: string
}

export const removeTodo = (payload: RemoveTodo['payload']) : RemoveTodo => ({
  type: "RemoveTodo", payload
})

export interface TodoRemoved {
  type: "TodoRemoved",
  payload: string
}

export const todoRemoved = (payload: TodoRemoved['payload']) : TodoRemoved => ({
  type: "TodoRemoved", payload
})

export interface AddTodo {
  type: "AddTodo",
  payload: string
}

export const addTodo = (payload: AddTodo['payload']) : AddTodo => ({
  type: "AddTodo", payload
})

export interface TodoAdded {
  type: "TodoAdded",
  payload: Todo
}

export const todoAdded = (payload: TodoAdded['payload']) : TodoAdded => ({
  type: "TodoAdded", payload
})
