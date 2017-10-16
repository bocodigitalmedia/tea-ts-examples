import { VNode, render as inferno } from 'inferno'
import { mount } from 'tea-ts'
import { app as Counter } from './counter'
import { app as Todos } from './todos'

export const element = (id: string): HTMLElement => {
  return document.getElementById(id) as HTMLElement
}

const render =
  (target: HTMLElement) =>
  (vnode: VNode): void => {
    inferno(vnode, target)
  }

mount(Counter, element("counter"), render)
mount(Todos, element("todos"), render)
