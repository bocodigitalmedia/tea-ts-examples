import { initial } from './State'
import { update } from './Update'
import { view } from './View'
import { service } from './Service'
import { Init, App } from './Tea'

export const init: Init =
  dispatch => {
    dispatch({ type: "RequestTodos" })
    return initial
  }

export const app: App  = {
  init, update, service, view
}
