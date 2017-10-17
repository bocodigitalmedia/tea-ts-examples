import * as Todos from './State/Todos'
import * as Request from './State/Request'
import * as AddTodoForm from './State/AddTodoForm'

export interface State {
  fetchTodosRequest: Request.State
  todos: Todos.State
  addTodoForm: AddTodoForm.State
}

export const initial: State = {
  todos: Todos.initial,
  fetchTodosRequest: Request.initial,
  addTodoForm: AddTodoForm.initial
}
export const set = <K extends keyof State>
  (key: K) => (val: State[K]) => (state: State): State => {
    return {...state, [key]: val }
  }

export const update = <K extends keyof State>
  (key: K, ...fns: ((state: State[K]) => State[K])[]) =>
  (state: State): State => {
    return {
      ...state,
      [key]: fns.reduce((memo, fn) => fn(memo), state[key])
    }
}

export const apply = (...fns: ((state: State) => State)[]) => (state: State): State => {
  return fns.reduce(
    (memo, fn) => fn(memo),
    state
  )
}
