import el from 'inferno-create-element'

import { View, Dispatch } from '../Tea'
import { todoToggled } from '../Message'
import { Todo } from '../data/Todo'

export const view: View<[string, Todo]> = dispatch => ([id, todo]) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={ todo.completed }
        onChange={ onCompleteChange(dispatch, [id, todo]) }
      />
      <span>{ todo.text }</span>
    </li>
  )
}

export const onCompleteChange = (dispatch: Dispatch, [id, todo]: [string, Todo]) => _ => {
  const msg = todoToggled({ id, completed: todo.completed })
  dispatch(msg)
}
