import { Update } from '../Tea'
import { Todos, empty, update as updateTodo, from } from '../data/Todos'
import { setCompleted } from '../data/Todo'
import { apply } from 'ramda'

export type State = Todos

export const initial = empty

export const update: Update<Todos> = msg => (todos:Todos) => {
  switch(msg.type) {

    case "todosReceived": {
      return apply(
        from(msg.payload),
        [todos],
      )
    }

    case "toggled": {
      const { id, completed } = msg.payload

      return apply(
        updateTodo(id, setCompleted(!completed)),
        [todos],
      )
    }

    default: {
      return todos
    }
  }
}
