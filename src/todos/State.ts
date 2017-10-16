import * as Todos from './State/Todos'
import * as Request from './State/Request'
import * as AddTodoForm from './State/AddTodoForm'
import * as Requests from './State/Requests'

export interface State {
  fetchTodosRequest: Request.State
  todos: Todos.State
  removeTodoRequests: Requests.State
  addTodoRequest: Request.State
  addTodoForm: AddTodoForm.State
}

export const initial: State = {
  todos: Todos.initial,
  fetchTodosRequest: Request.initial,
  removeTodoRequests: Requests.initial,
  addTodoRequest: Request.initial,
  addTodoForm: AddTodoForm.initial
}

export const set = <K extends keyof State, V extends State[K]>
  (key: K) => (val: V) => (state: State):State => {
    return {...state, [key]: val }
  }

export const update = <K extends keyof State>
  (key: K, fn: (state: State[K]) => State[K]) =>
  (state: State): State => {
    return { ...state, [key]: fn(state[key]) }
}

export const apply = (...fns: ((state: State) => State)[]) => (state: State): State => {
  return fns.reduce(
    (memo, fn) => fn(memo),
    state
  )
}
