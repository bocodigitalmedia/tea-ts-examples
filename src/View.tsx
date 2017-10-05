import { View, jsx } from './Tea'
import { State } from './State'
import { view as viewTodoList } from './views/TodoList'
import { view as viewTodosRequest } from './views/TodosRequest'

export const view: View<State> = dispatch => state => {
  return(
    <div>
      { viewTodosRequest(dispatch)(state.todosRequest) }
      { viewTodoList(dispatch)(state.todos) }
    </div>
  )
}
