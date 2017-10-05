import { View, CreateHandler, jsx } from '../Tea'
import { todoToggled } from '../Message'
import { Todo } from '../data/Todo'

type TodoTuple = [string, Todo]

export const view: View<TodoTuple> = dispatch => ([id, todo]) => (
  <li>
    <input
      type="checkbox"
      checked={ todo.completed }
      onChange={ onCompleteChange(dispatch, [id, todo]) }
      />
    <span>{ todo.text }</span>
  </li>
)


export const onCompleteChange: CreateHandler<TodoTuple> = (dispatch, [id, todo]) => (_) => {
  const msg = todoToggled({ id, completed: todo.completed })
  dispatch(msg)
}
