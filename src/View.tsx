import { View } from './Tea'
import { State } from './State'
import { apply } from 'ramda'
import { view as viewTodoList } from './views/TodoList'

import el from 'inferno-create-element'

export const view: View<State> = dispatch => state => {
  if(state.todosRequest.active) {
    return <span>Loading todos...</span>
  } else {
    return apply(
      viewTodoList(dispatch),
      [state.todos]
    )
  }
}
