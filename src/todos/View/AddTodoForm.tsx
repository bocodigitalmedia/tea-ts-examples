import { jsx, View } from '../Tea'
import { State as AddTodoForm } from '../State/AddTodoForm'
import { addTodo, addTodoInput } from '../Msg'

export const form: View<AddTodoForm> =
  (dispatch) => ({ text, request }) => {

    const handleSubmit = (evt: any) => {
      evt.preventDefault()
      dispatch(addTodo(text))
    }

    const handleInput = (evt: any) => {
      dispatch(addTodoInput(evt.target.value))
    }

    return (
      <form onSubmit={ handleSubmit }>

        <input
          type="text" value={ text }
          disabled={ request.active }
          onInput={ handleInput }
          placeholder="Add a todo..."
        />

      </form>
    )
  }
