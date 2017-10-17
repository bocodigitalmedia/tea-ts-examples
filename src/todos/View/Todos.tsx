import { jsx, View } from '../Tea'
import { listItem as todoListItem } from './Todo'
import { State as Todos } from '../State/Todos'

export const list: View<Todos> =
  dispatch => todos => (
    <ul>{ todos.map(todoListItem(dispatch)) }</ul>
  )
