export type State = AddTodoForm

export interface AddTodoForm {
  text: string
}

export const initial: AddTodoForm = {
  text: ""
}

export const setText = (text: string) => (form: AddTodoForm): AddTodoForm => ({
  ...form, text
})

export const clear = (form: AddTodoForm): AddTodoForm => ({
  ...form, text: ""
})
