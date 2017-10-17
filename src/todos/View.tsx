import { jsx, View } from './Tea'
import { list as viewTodos } from './View/Todos'
import { form as viewAddTodoForm } from './View/AddTodoForm'
import { alert as requestAlert } from './View/Request'

export const view: View =
  dispatch => state => (
    <div>
      { requestAlert("Loading todos...")(dispatch)(state.fetchTodosRequest) }
      { viewTodos(dispatch)(state.todos) }
      { viewAddTodoForm(dispatch)(state.addTodoForm) }
    </div>
  )
