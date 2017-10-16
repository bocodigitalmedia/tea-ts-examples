import { jsx, ComponentView } from '../Tea'
import { State as AddTodoForm } from '../State/AddTodoForm'
import { addTodo, addTodoInput } from '../Msg'

export const form: ComponentView<AddTodoForm> =
  (dispatch, state) => ({ text }) => {

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
          disabled={ state.addTodoRequest.active }
          onInput={ handleInput }
        />

      </form>
    )
  }
