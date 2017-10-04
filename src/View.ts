import { View } from './Tea'
import { State } from './State'
import { apply } from 'ramda'
import { view as viewTodoList } from './views/TodoList'
import { view as viewTodosRequest } from './views/TodosRequest'

export const view: View<State> = dispatch => state => {
  if(state.todosRequest.active || state.todosRequest.error) {
    return apply(
      viewTodosRequest(dispatch),
      [state.todosRequest]
    )
  } else {
    return apply(
      viewTodoList(dispatch),
      [state.todos]
    )
  }
}
