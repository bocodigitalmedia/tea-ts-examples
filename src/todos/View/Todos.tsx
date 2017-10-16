import { jsx, ComponentView } from '../Tea'
import { listItem as todoListItem } from './Todo'
import { State as Todos } from '../State/Todos'

export const list: ComponentView<Todos> =
  (dispatch, state) => todos => (
    <ul>{ todos.map(todoListItem(dispatch, state)) }</ul>
  )
