import jsx from 'inferno-create-element'
import { VNode } from 'inferno'
import { Init, View, Update, Service } from 'tea-ts'

type State = string

type Msg =
  | Input
  | Focus

type Input =
  ["Input", string]

type Focus =
  ["Focus", null]

const init: Init<Msg, State> =
  dispatch => {
    dispatch(["Focus", null])
    return "World"
  }

const view: View<Msg, State, VNode> = dispatch => state => (
  <div>
    <p>Hello { state }!</p>
    <input
      id="HelloInput"
      type="text"
      value={ state }
      onInput={ evt => dispatch(["Input", evt.target.value]) }
    />
  </div>
)

const update: Update<Msg, State> = (state, msg) => {
  if(msg[0] === "Input") {
    return msg[1]
  } else {
    return state
  }
}

const service: Service<Msg> =
  dispatch => msg => {
    if(msg[0] === "Focus") {
      const el = document.getElementById("HelloInput") as HTMLInputElement
      el.focus()
      el.select()
    }
  }


export const app = { init, view, update, service }
