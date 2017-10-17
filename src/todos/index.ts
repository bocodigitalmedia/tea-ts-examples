import { initial } from './State'
import { update } from './Update'
import { view } from './View'
import { service } from './Service'
import { Init, App } from './Tea'
import { fetchTodos } from './Msg'

export const init: Init =
  dispatch => {
    dispatch(fetchTodos())
    return initial
  }

export const app: App  = {
  init, update, service, view
}
