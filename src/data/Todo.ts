export type Todo = {
  text: string,
  completed: boolean
}

export const empty: Todo = {
  text: "",
  completed: false
}

export const setText = (text: string) => (todo: Todo): Todo => ({
  ...todo, text
})

export const setCompleted = (completed: boolean) => (todo: Todo): Todo => ({
  ...todo, completed
})
