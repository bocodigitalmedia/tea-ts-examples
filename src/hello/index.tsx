import jsx from "inferno-create-element"
import { VNode } from "inferno"
import { Init, View, Update, Service } from "tea-ts"

type State = string

type Msg = Input | Focus

interface Input {
  type: "Input"
  payload: string
}

interface Focus {
  type: "Focus"
  payload: null
}

function Focus(payload: Focus["payload"] = null): Focus {
  return { type: "Focus", payload }
}

function Input(payload: Input["payload"]): Input {
  return { type: "Input", payload }
}

const init: Init<Msg, State> = dispatch => {
  dispatch(Focus())
  return "World"
}

const view: View<Msg, State, VNode> = dispatch => state => (
  <div>
    <p>Hello {state}!</p>
    <input
      id="HelloInput"
      type="text"
      value={state}
      onInput={(evt: any) => dispatch(Input(evt.target.value))}
    />
  </div>
)

const update: Update<Msg, State> = (state, msg) => {
  if (msg.type === "Input") {
    return msg.payload
  } else {
    return state
  }
}

const service: Service<Msg> = _dispatch => msg => {
  if (msg.payload === "Focus") {
    const el = document.getElementById("HelloInput") as HTMLInputElement
    el.focus()
    el.select()
  }
}

export const app = { init, view, update, service }
