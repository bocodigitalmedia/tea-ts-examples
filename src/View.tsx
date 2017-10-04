import { Dispatch, View } from 'tea-ts'
import { VNode } from 'inferno'
import { State } from './State'
import { Msg, toggled } from './Message'
import { map as mapTodos } from './data/Todos'
import { Todo } from './data/Todo'

import el from 'inferno-create-element'

export const view: View<Msg, State, VNode> = dispatch => state => {
  const items =
    mapTodos(viewItem(dispatch))
      (state.todos)

  if(state.loading) {
    return <span>Loading todos...</span>
  } else {
    return (
      <ul>{ items }</ul>
    )
  }
}

export const viewItem: View<Msg, [string, Todo], VNode> = dispatch => ([id, todo]) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={ todo.completed }
        onChange={ onCompleteChange(dispatch, [id, todo]) }
      />
      <span>{ todo.text }</span>
    </li>
  )
}

export const onCompleteChange = (dispatch: Dispatch<Msg>, [id, todo]: [string, Todo]) => _ => {
  const msg = toggled({ id, completed: todo.completed })
  dispatch(msg)
}
