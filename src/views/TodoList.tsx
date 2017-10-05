import { View, jsx } from '../Tea'
import { Todos, map } from '../data/Todos'
import { apply } from 'ramda'
import { view as viewListItem } from './TodoListItem'

export const view: View<Todos> = dispatch => todos => {
  const listItems = apply(
    map(viewListItem(dispatch)),
    [todos]
  )

  return <ul>{ listItems }</ul>
}
