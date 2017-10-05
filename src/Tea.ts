import * as Tea from 'tea-ts'
import { VNode, render as inferno } from 'inferno'
import createElement from 'inferno-create-element'

import { Msg } from './Message'
import { State } from './State'

export type App = Tea.App<Msg, State, VNode>
export type Init = Tea.Init<Msg, State>
export type Update<State> = Tea.Update<Msg, State>
export type View<State> = Tea.View<Msg, State, VNode>
export type Dispatch = Tea.Dispatch<Msg>
export type Render = Tea.Render<VNode>
export type Mounted = Tea.Mounted<Msg, State, VNode>
export type Service = Tea.Service<Msg>
export type CreateHandler<State> = (dispatch: Dispatch, state: State) => (...args: any[]) => any

export const jsx = createElement

export const render: Render = (target: HTMLElement) => (vnode: VNode): void => {
  inferno(vnode, target)
}

export const mount = (app: App, target: HTMLElement): Mounted => {
  return Tea.mount(app, target, render)
}
