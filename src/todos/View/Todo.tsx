import { jsx, View } from '../Tea'
import { State as Todo } from '../State/Todo'
import { removeTodo, beginEditTodo, editTodoInput, cancelEditTodo, finishEditTodo } from '../Msg'
import { State as Request } from '../State/Request'

const KEYCODE_ENTER = 13
const KEYCODE_ESC = 27

export const listItem: View<Todo> =
  (dispatch) => ({ id, text, newText, editable, editRequest, removeRequest }) => {

    const listItemId = `TodoListItem-${id}`
    const inputSelector = `#${listItemId} > input`

    const dispatchRemove = (_evt: any) => {
      dispatch(removeTodo(id))
    }

    const dispatchEdit = (_evt: any) => {
      if(!removeRequest.active) {
        dispatch(beginEditTodo({ id, inputSelector }))
      }
    }

    const dispatchCancelEdit = (_evt: any) => {
      dispatch(cancelEditTodo(id))
    }

    const handleInputKeyUp = (evt: any) => {

      if(evt.keyCode === KEYCODE_ESC) {
        dispatch(cancelEditTodo(id))
      }

      if(evt.keyCode === KEYCODE_ENTER) {
        dispatch(finishEditTodo({ id, newText }))
      }

      else {
        dispatch(editTodoInput({ id, newText: evt.target.value }))
      }
    }

    if(editable) {
      return (
        <li id={ listItemId }>
          <input
            type="text"
            value={ newText }
            disabled={ editRequest.active }
            onKeyUp={ handleInputKeyUp }
            onBlur={ dispatchCancelEdit }
            />
        </li>
      )
    } else {
      return (
        <li id={ listItemId }>
          <span onClick={ dispatchEdit }>{ text }</span>
          <button
            disabled={ removeRequest.active }
            onClick={ dispatchRemove }
          >
            Remove
          </button>
          { removeErrorMessage(removeRequest) }
        </li>
      )
    }
  }

const removeErrorMessage = (request: Request) => {
  if(request.error !== null) {
    return <div>{ request.error }</div>
  } else {
    return <span />
  }
}
