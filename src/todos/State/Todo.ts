export type State = Todo

export interface Todo {
  id: string,
  text: string
}

export const create = (text: string): Todo => ({
  id: new Date().toISOString(), text
})

export const idNotEquals = (id: string) => (todo: Todo): boolean => {
  return todo.id !== id
}
