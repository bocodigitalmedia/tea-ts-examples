import jsx from 'inferno-create-element'
import { VNode } from 'inferno'
import { App, Init, Update, View, Service } from 'tea-ts'

export type Msg =
  | "increment"
  | "decrement"
  | "reset"

export type State
  = number

export const init: Init <Msg, State> =
  _ => 0

export const update: Update <Msg, State> =
  (state, msg) => {
    switch(msg) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      case "reset":
        return 0
      default:
        return state
    }
  }

export const service: Service <Msg> =
  _dispatch => _msg => {}

export const view: View <Msg, State, VNode> =
  dispatch => state =>  {
    return (
      <div id="counter">
        <span>{ state }</span>
        <button onClick={ _ => dispatch("decrement") }>-</button>
        <button onClick={ _ => dispatch("reset") }>reset</button>
        <button onClick={ _ => dispatch("increment") }>+</button>
      </div>
    )
  }

export const app: App<Msg, State,VNode> =
  { init, update, view, service }
