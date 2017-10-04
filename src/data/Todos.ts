import { Todo } from './Todo'
import { addLast, omit, set as tset } from 'timm'

type TodoMap = { [id: string]: Todo }

export type Todos = {
  byId: TodoMap,
  ids: string[],
}

export const empty: Todos = {
  byId: {},
  ids: [],
}

export const from = (source: TodoMap) => (todos: Todos): Todos => {
  const ids = Object.keys(source)
  const byId = source
  return { ...todos, ids, byId }
}

export const set = (id: string, todo: Todo) => (todos: Todos): Todos => {
  const ids = addLast(todos.ids, id)
  const byId = tset(todos.byId, id, todo)

  return {
    ...todos, ids, byId
  }
}

export const get = (id: string) => (todos: Todos): Todo | undefined => {
  return todos.byId[id]
}

export const remove = (id: string) => (todos: Todos): Todos => {

  const ids = omit(todos.ids, id)
  const byId = omit(todos.byId, id)

  return {
    ...todos, ids, byId
  }
}

export const map = <T> (fn: (t: [string,Todo]) => T) => (todos:Todos): T[] => {
  return todos.ids.map(id => {
    return fn([id, <Todo>get(id)(todos)])
  })
}
