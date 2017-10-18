import { State as Request, initial as initialRequest } from './Request'
import { v4 as uuid } from 'uuid'

export interface State {
  id: string
  text: string
  newText: string
  editable: boolean
  editRequest: Request
  removeRequest: Request
}

export const initial: State = {
  id: "",
  text: "",
  newText: "",
  editable: false,
  editRequest: initialRequest,
  removeRequest: initialRequest
}

export const from = ({ id, text }: { id: string, text: string }): State => ({
  ...initial, id, text
})

export const create = (text: string): State => ({
  ...initial, text, id: uuid()
})

export const idEquals = (id: string) => (state: State): boolean => {
  return state.id === id
}

export const idNotEquals = (id: string) => (state: State): boolean => {
  return state.id !== id
}

export const setEditable = (state: State): State => ({
  ...state, editable: true, newText: state.text
})

export const setUneditable = (state: State): State => ({
  ...state, editable: false, newText: ""
})

export const setNewText = (newText: string) => (state: State): State => ({
  ...state, newText
})

export const setText = (text: string) => (state: State): State => ({
  ...state, text
})

export const updateRemoveRequest =
  (...fns: ((r: Request) => Request)[]) =>
  (state: State): State => {

    return {
      ...state,
      removeRequest: fns.reduce((memo,fn) => fn(memo), state.removeRequest)
    }
  }

export const updateEditRequest =
  (...fns: ((r: Request) => Request)[]) =>
  (state: State): State => {

    return {
      ...state,
      editRequest: fns.reduce((memo,fn) => fn(memo), state.removeRequest)
    }
  }
