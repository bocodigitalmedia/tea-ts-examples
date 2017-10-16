import { Dispatch, Service } from 'tea-ts'
import { Msg, AddTodo, RemoveTodo, RequestTodos, todoAdded, todoRemoved, todosReceived  } from './Msg'

const addTodo = (dispatch: Dispatch<Msg>, msg: AddTodo) =>
  setTimeout(dispatch, 250, todoAdded({
      id: new Date().toISOString(),
      text: msg.payload
  }))

const removeTodo = (dispatch: Dispatch<Msg>, msg: RemoveTodo) =>
  setTimeout(dispatch, 250, todoRemoved(msg.payload))

const requestTodos = (dispatch: Dispatch<Msg>, _msg: RequestTodos) =>
  setTimeout(dispatch, 500, todosReceived([
    { id: "first", text: "Do a thing" },
    { id: "second", text: "Do another thing" },
  ]))

export const service: Service<Msg> =
  dispatch => msg => {
    switch(msg.type) {
      case "AddTodo": return addTodo(dispatch, msg)
      case "RemoveTodo": return removeTodo(dispatch, msg)
      case "RequestTodos": return requestTodos(dispatch, msg)
      default: return
    }
  }
