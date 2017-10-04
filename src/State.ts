import { Update } from './Tea'
import * as Todos from './state/todos'
import * as TodosRequest from './state/todosRequest'

export type State = {
  todos: Todos.State,
  todosRequest: TodosRequest.State,
}

export const initial: State = {
  todos: Todos.initial,
  todosRequest: TodosRequest.initial
}

export const update: Update<State> = msg => state => ({
  ...state,
  todos: Todos.update(msg)(state.todos),
  todosRequest: TodosRequest.update(msg)(state.todosRequest),
})
