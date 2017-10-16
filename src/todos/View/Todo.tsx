import { jsx, ComponentView } from '../Tea'
import { State as Todo } from '../State/Todo'
import { has as hasRequest } from '../State/Requests'
import { removeTodo } from '../Msg'

export const listItem: ComponentView<Todo> =
  (dispatch, state) => ({ id, text }) => {

    const handleClick = (_evt: any) => {
      dispatch(removeTodo(id))
    }

    return (
      <li>
        <span>{ text }</span>
        <button
          disabled={ hasRequest(id)(state.removeTodoRequests) }
          onClick={ handleClick }
        >
          Remove
        </button>
      </li>
    )
  }
