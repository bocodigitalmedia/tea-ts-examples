import { App, Init } from './Tea'
import { todosRequested } from './Message'
import { initial, update } from './State'
import { view } from './View'
import { service } from './Service'

export const init: Init = dispatch => {
  dispatch(todosRequested({ retries: 0 }))
  return initial
}

export const app: App = {
  init, update, view, service
}
