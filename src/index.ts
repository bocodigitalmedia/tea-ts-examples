import { mount } from 'tea-ts'
import { VNode, render as infernoRender } from 'inferno'
import { app } from './app'
import { Msg } from './Message'
import { State } from './State'

const render = (target: HTMLElement) => (vnode: VNode): void => {
  infernoRender(vnode, target)
}

const maybeTarget = document.getElementById('app')

switch(maybeTarget) {
  case null: {
    console.error('could not find mount target')
    break
  }
  default: {
    const mounted = mount<Msg, State, VNode>(app, maybeTarget, render)

    mounted.message$.subscribe({
      next: msg => console.log(msg.type, msg.payload),
      error: () => {},
      complete: () => {},
    })

    mounted.state$.subscribe({
      next: msg => console.log(msg.todos),
      error: () => {},
      complete: () => {},
    })
  }
}
