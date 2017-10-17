import { State as Request, initial as initialRequest } from './Request'

export interface State {
  text: string
  request: Request
}

export const initial: State = {
  text: "",
  request: initialRequest
}

export const setText = (text: string) => (form: State): State => ({
  ...form, text
})

export const clear = (form: State): State => ({
  ...form, text: ""
})

export const updateRequest = (...fns: ((request: Request) => Request)[]) => (form: State): State => {
  return {
    ...form,
    request: fns.reduce((memo, fn) => fn(memo), form.request)
  }
}
