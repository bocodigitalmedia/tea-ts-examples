import { apply, update as change } from './State'
import * as Request from './State/Request'
import * as Requests from './State/Requests'
import * as Todos from './State/Todos'
import * as AddTodoForm from './State/AddTodoForm'
import * as Msg from './Msg'

import { Update } from './Tea'

export const onRequestTodos = (_msg: Msg.RequestTodos) => apply(
  change("fetchTodosRequest", Request.setActive)
)

export const onTodosReceived = (msg: Msg.TodosReceived) => apply(
  change("todos", Todos.add(...msg.payload)),
  change("fetchTodosRequest", Request.setInactive)
)

export const onAddTodo = (_msg: Msg.AddTodo) => apply(
  change("addTodoRequest", Request.setActive)
)

export const onAddTodoInput = (msg: Msg.AddTodoInput) => apply(
  change("addTodoForm", AddTodoForm.setText(msg.payload))
)

export const onTodoAdded = (msg: Msg.TodoAdded) => apply(
  change("todos", Todos.add(msg.payload)),
  change("addTodoRequest", Request.setInactive),
  change("addTodoForm", AddTodoForm.clear)
)

export const onTodoRemoved = (msg: Msg.TodoRemoved) => apply(
  change("todos", Todos.remove(msg.payload)),
  change("removeTodoRequests", Requests.remove(msg.payload))
)

export const onRemoveTodo = (msg: Msg.RemoveTodo) => apply(
  change("removeTodoRequests", Requests.add(msg.payload))
)

export const update: Update =
  (state, msg) => {

    switch(msg.type) {

      case "RequestTodos":
        return onRequestTodos(msg)(state)

      case "TodosReceived":
        return onTodosReceived(msg)(state)

      case "AddTodo":
        return onAddTodo(msg)(state)

      case "AddTodoInput":
        return onAddTodoInput(msg)(state)

      case "TodoAdded":
        return onTodoAdded(msg)(state)

      case "TodoRemoved":
        return onTodoRemoved(msg)(state)

      case "RemoveTodo":
        return onRemoveTodo(msg)(state)

      default:
        return state
    }
  }
