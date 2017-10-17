import { apply, update as change } from './State'
import * as Request from './State/Request'
import * as Todos from './State/Todos'
import * as Todo from './State/Todo'
import * as AddTodoForm from './State/AddTodoForm'
import * as Msg from './Msg'
import { payload } from './Msg'
import { Update } from './Tea'

// Fetching todos

export const onFetchTodos = (_msg: Msg.FetchTodos) => apply(
  change("fetchTodosRequest", Request.setActive)
)

export const onTodosFetched = (msg: Msg.TodosFetched) => apply(
  change("todos", Todos.add(...payload(msg))),
  change("fetchTodosRequest", Request.setInactive)
)

// Adding a todo

export const onAddTodoInput = (msg: Msg.AddTodoInput) => apply(
  change("addTodoForm", AddTodoForm.setText(payload(msg)))
)

export const onAddTodo = (_msg: Msg.AddTodo) => apply(
  change("addTodoForm",
    AddTodoForm.updateRequest(Request.setActive)
  )
)

export const onTodoAdded = (msg: Msg.TodoAdded) => apply(
  change("todos", Todos.add(payload(msg))),
  change("addTodoForm",
    AddTodoForm.clear,
    AddTodoForm.updateRequest(Request.setInactive)
  )
)

// Removing a todo

export const onRemoveTodo = (msg: Msg.RemoveTodo) => apply(
  change("todos",
    Todos.update(payload(msg),
      Todo.updateRemoveRequest(Request.setActive)
    )
  )
)

export const onTodoRemoved = (msg: Msg.TodoRemoved) => apply(
  change("todos", Todos.remove(payload(msg)))
)


// Editing a todo
export const onBeginEditTodo = (msg: Msg.BeginEditTodo) => apply(
  change("todos",
    Todos.update(payload(msg).id,
      Todo.setEditable
    )
  )
)

export const onEditTodoInput = (msg: Msg.EditTodoInput) => apply(
  change("todos",
    Todos.update(payload(msg).id,
      Todo.setNewText(payload(msg).newText)
    )
  )
)

export const onCancelEditTodo = (msg: Msg.CancelEditTodo) => apply(
  change("todos",
    Todos.update(payload(msg),
      Todo.setUneditable
    )
  )
)

export const onFinishEditTodo = (msg: Msg.FinishEditTodo) => apply(
  change("todos",
    Todos.update(payload(msg).id,
      Todo.updateEditRequest(Request.setActive)
    )
  )
)

export const onTodoEdited = (msg: Msg.TodoEdited) => apply(
  change("todos",
    Todos.update(payload(msg).id,
      Todo.updateEditRequest(Request.setInactive),
      Todo.setUneditable,
      Todo.setText(payload(msg).text),
    )
  )
)

export const update: Update =

  (state, msg) => {

    if(Msg.isFetchTodos(msg))
      return onFetchTodos(msg)(state)

    if(Msg.isTodosFetched(msg))
      return onTodosFetched(msg)(state)

    if(Msg.isAddTodoInput(msg))
      return onAddTodoInput(msg)(state)

    if(Msg.isAddTodo(msg))
      return onAddTodo(msg)(state)

    if(Msg.isTodoAdded(msg))
      return onTodoAdded(msg)(state)

    if(Msg.isRemoveTodo(msg))
      return onRemoveTodo(msg)(state)

    if(Msg.isTodoRemoved(msg))
      return onTodoRemoved(msg)(state)

    if(Msg.isBeginEditTodo(msg))
      return onBeginEditTodo(msg)(state)

    if(Msg.isEditTodoInput(msg))
      return onEditTodoInput(msg)(state)

    if(Msg.isCancelEditTodo(msg))
      return onCancelEditTodo(msg)(state)

    if(Msg.isFinishEditTodo(msg))
      return onFinishEditTodo(msg)(state)

    if(Msg.isTodoEdited(msg))
      return onTodoEdited(msg)(state)

    return state
  }
