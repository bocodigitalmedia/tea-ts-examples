import * as Message from './Message'
import * as Todos from './data/Todos'
import * as Todo from './data/Todo'
import { apply } from 'ramda'

export type State = {
  todos: Todos.Todos,
  loading: boolean
}

export const initial: State = {
  todos: Todos.empty,
  loading: false
}

export const onCreated = (msg: Message.Created) => (state: State): State => {
  const { id, text } = msg.payload

  const todo = apply(
    Todo.setText(text),
    [Todo.empty],
  )

  const todos = apply(
    Todos.set(id, todo),
    [state.todos],
  )

  return {...state, todos }
}

export const onToggled = (msg: Message.Toggled) => (state: State): State => {
  const { id, completed } = msg.payload

  const maybeTodo = apply(
    Todos.get(id),
    [state.todos],
  )

  switch(maybeTodo) {
    case null: {
      return state
    }

    default: {
      const todo = apply(
        Todo.setCompleted(!completed),
        [maybeTodo],
      )

      const todos = apply(
        Todos.set(id, todo),
        [state.todos],
      )

      return { ...state, todos }
    }
  }
}

export const onRemoved = (msg: Message.Removed) => (state: State): State => {
  const { id } = msg.payload

  const todos = apply(
    Todos.remove(id),
    [state.todos],
  )

  return { ...state, todos }
}

export const onLoad = (_: Message.Load) => (state: State): State => {
  return { ...state, loading: true }
}

export const onLoaded = (msg: Message.Loaded) => (state: State): State => {
  const todos = apply(
    Todos.from(msg.payload),
    [state.todos],
  )

  return { ...state, todos, loading: false }
}
