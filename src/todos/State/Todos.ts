import * as Todo from './Todo'

type Todo = Todo.State

export type State = Todos

export type Todos = Todo[]

export const initial: Todos = []

export const add = (...items: Todo[]) => (todos: Todos): Todos => {
  return [ ...todos, ...items ]
}

export const remove = (id: string) => (todos: Todos): Todos => {
  return todos.filter(Todo.idNotEquals(id))
}

export const update =
  (id: string, ...fns: ((t: Todo) => Todo)[]) =>
  (todos: Todos): Todos => {
    return todos.map(todo => {
      if(todo.id === id) {
        return fns.reduce((memo, fn) => fn(memo), todo)
      } else {
        return todo
      }
    })
  }
