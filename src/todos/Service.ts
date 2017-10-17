import { Dispatch, Service } from 'tea-ts'
import * as Todo from './State/Todo'

import {
  Msg,
  payload,
  AddTodo, isAddTodo,
  RemoveTodo, isRemoveTodo,
  FetchTodos, isFetchTodos,
  BeginEditTodo, isBeginEditTodo,
  FinishEditTodo, isFinishEditTodo,
  todoAdded,
  todoRemoved,
  todosFetched,
  todoEdited
} from './Msg'

const addTodo = (dispatch: Dispatch<Msg>, msg: AddTodo) =>
  setTimeout(dispatch, 250, todoAdded(Todo.create(payload(msg))))

const removeTodo = (dispatch: Dispatch<Msg>, msg: RemoveTodo) =>
  setTimeout(dispatch, 250, todoRemoved(payload(msg)))

const fetchTodos = (dispatch: Dispatch<Msg>, _msg: FetchTodos) =>
  setTimeout(dispatch, 500, todosFetched([
    Todo.create('Do a thing'),
    Todo.create('Do another thing'),
  ]))

const beginEditTodo = (_dispatch: Dispatch<Msg>, msg: BeginEditTodo) => {
  const { inputSelector } = payload(msg)

  setImmediate(() => {
    const input = document.querySelector(inputSelector) as HTMLInputElement
    input.focus()
    input.select()
  })
}

const finishEditTodo = (dispatch: Dispatch<Msg>, msg: FinishEditTodo) => {
  const { id, newText } = payload(msg)
  setTimeout(dispatch, 250, todoEdited({ id, text: newText }))
}

export const service: Service<Msg> =
  dispatch => (msg) => {

    if(isFetchTodos(msg))
      return fetchTodos(dispatch, msg)

    if(isRemoveTodo(msg))
      return removeTodo(dispatch, msg)

    if(isAddTodo(msg))
      return addTodo(dispatch, msg)

    if(isBeginEditTodo(msg))
      return beginEditTodo(dispatch, msg)

    if(isFinishEditTodo(msg))
      return finishEditTodo(dispatch, msg)

    return
  }
