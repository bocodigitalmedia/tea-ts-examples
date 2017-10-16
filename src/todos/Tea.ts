import * as Tea from 'tea-ts'
import { Msg } from './Msg'
import { State } from './State'
import { VNode, render as inferno } from 'inferno'
import createElement from 'inferno-create-element'

export type Init = Tea.Init<Msg, State>
export type Dispatch = Tea.Dispatch<Msg>
export type Update <S = State> = Tea.Update<Msg, S>
export type View <S = State> = Tea.View<Msg, S, VNode>
export type Service = Tea.Service<Msg>
export type App = Tea.App<Msg, State, VNode>
export type ComponentView <C> = (dispatch: Dispatch, globalState: State) => (componentState: C) => VNode

export const jsx = createElement

export const render: Tea.Render<VNode> =
  target => vnode => inferno(vnode, target)
