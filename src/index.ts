import { mount } from './Tea'
import { app } from './app'

const target = document.getElementById('app')

switch(target) {
  case null: {
    console.error('could not find mount target')
    break
  }
  default: {
    const mounted = mount(app, <HTMLElement>target)

    mounted.message$.subscribe({
      next: msg => console.log(msg.type, msg.payload),
      error: () => {},
      complete: () => {},
    })

    mounted.state$.subscribe({
      next: msg => console.log(msg),
      error: () => {},
      complete: () => {},
    })
  }
}
