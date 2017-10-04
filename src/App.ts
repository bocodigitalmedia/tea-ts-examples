import { App, Init } from 'tea-ts'
import { Msg, load } from './Message'
import { State, initial } from './State'
import { VNode } from 'inferno'

import { update } from './Update'
import { service } from './Service'
import { view } from './View'

export const init: Init<Msg, State> = dispatch => {
  dispatch(load(null))
  return initial
}

export const app: App<Msg, State, VNode> = {
  init, update, view, service
}
