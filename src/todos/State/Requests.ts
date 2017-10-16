import * as Request from './Request'

export type State = Requests

export type Requests = {
  [id: string]: Request.State
}

export const initial: Requests = {}

export const add = (id: string) => (requests: Requests): Requests => ({
  ...requests, [id]: Request.setActive(Request.initial)
})

export const remove = (removeId: string) => (requests: Requests): Requests => {
  return Object
    .keys(requests)
    .reduce(
      (memo, id) => id === removeId ? memo : add(id)(memo),
      initial
    )
}

export const has = (id: string) => (requests: Requests): boolean => {
  return requests[id] !== undefined
}
