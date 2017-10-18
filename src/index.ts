import { VNode, render as inferno } from 'inferno'
import { mount } from 'tea-ts'
import { app as Hello } from './hello'
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

mount(Todos, element("todos"), render)
mount(Counter, element("counter"), render)
mount(Hello, element("hello"), render)
