import { State as Todo, idNotEquals } from './Todo'

export type State = Todos

export type Todos = Todo[]

export const initial: Todos = []

export const add = (...items: Todo[]) => (todos: Todos): Todos => {
  return [ ...todos, ...items ]
}

export const remove = (id: string) => (todos: Todos): Todos => {
  return todos.filter(idNotEquals(id))
}
