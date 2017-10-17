import { State as Todo } from './State/Todo'

export type Msg =
  | FetchTodos
  | TodosFetched
  | RemoveTodo
  | TodoRemoved
  | AddTodo
  | AddTodoInput
  | TodoAdded
  | BeginEditTodo
  | EditTodoInput
  | CancelEditTodo
  | FinishEditTodo
  | TodoEdited

export const payload = <T extends Msg> (msg: T): T[1] =>
  msg[1]

// Fetch Todos
export type FetchTodos =
  ["FetchTodos", null]

export const fetchTodos = (payload: FetchTodos[1] = null): FetchTodos =>
  ["FetchTodos", payload]

export const isFetchTodos = (msg: Msg): msg is FetchTodos =>
  msg[0] === "FetchTodos"


export type TodosFetched =
  ["TodosFetched", Todo[]]

export const todosFetched = (payload: TodosFetched[1]): TodosFetched =>
  ["TodosFetched", payload]

export const isTodosFetched = (msg: Msg): msg is TodosFetched =>
  msg[0] === "TodosFetched"


// Add todo

export type AddTodoInput =
  ["AddTodoInput", string]

export const addTodoInput = (payload: AddTodoInput[1]): AddTodoInput =>
  ["AddTodoInput", payload]

export const isAddTodoInput = (msg: Msg): msg is AddTodoInput =>
  msg[0] === "AddTodoInput"


export type AddTodo =
  ["AddTodo", string]

export const addTodo = (payload: AddTodo[1]) : AddTodo =>
  ["AddTodo", payload]

export const isAddTodo = (msg: Msg): msg is AddTodo =>
  msg[0] === "AddTodo"



export type TodoAdded =
  ["TodoAdded", Todo]

export const todoAdded = (payload: TodoAdded[1]) : TodoAdded =>
  ["TodoAdded", payload]

export const isTodoAdded = (msg: Msg): msg is TodoAdded =>
  msg[0] === "TodoAdded"



// Remove todo

export type RemoveTodo =
  ["RemoveTodo", string]

export const removeTodo = (payload: RemoveTodo[1]) : RemoveTodo =>
  ["RemoveTodo", payload]

export const isRemoveTodo = (msg: Msg): msg is RemoveTodo =>
  msg[0] === "RemoveTodo"


export type TodoRemoved =
  ["TodoRemoved", string]

export const todoRemoved = (payload: TodoRemoved[1]) : TodoRemoved =>
  ["TodoRemoved", payload]

export const isTodoRemoved = (msg: Msg): msg is TodoRemoved =>
  msg[0] === "TodoRemoved"


// Edit todo

export type BeginEditTodo =
  ["BeginEditTodo", { id: string, inputSelector: string }]

export const beginEditTodo = (payload: BeginEditTodo[1]): BeginEditTodo =>
  ["BeginEditTodo", payload]

export const isBeginEditTodo = (msg: Msg): msg is BeginEditTodo =>
  msg[0] === "BeginEditTodo"


export type EditTodoInput =
  ["EditTodoInput", { id: string, newText: string }]

export const editTodoInput = (payload: EditTodoInput[1]): EditTodoInput =>
  ["EditTodoInput", payload]

export const isEditTodoInput = (msg: Msg): msg is EditTodoInput =>
  msg[0] === "EditTodoInput"


export type CancelEditTodo =
  ["CancelEditTodo", string]

export const cancelEditTodo = (payload: CancelEditTodo[1]): CancelEditTodo =>
  ["CancelEditTodo", payload]

export const isCancelEditTodo = (msg: Msg): msg is CancelEditTodo =>
  msg[0] === "CancelEditTodo"


export type FinishEditTodo =
  ["FinishEditTodo", { id: string, newText: string }]

export const finishEditTodo = (payload: FinishEditTodo[1]): FinishEditTodo =>
  ["FinishEditTodo", payload]

export const isFinishEditTodo = (msg: Msg): msg is FinishEditTodo =>
  msg[0] === "FinishEditTodo"


export type TodoEdited =
  ["TodoEdited", { id: string, text: string }]

export const todoEdited = (payload: TodoEdited[1]): TodoEdited =>
  ["TodoEdited", payload]

export const isTodoEdited = (msg: Msg): msg is TodoEdited =>
  msg[0] === "TodoEdited"
