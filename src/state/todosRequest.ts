import { Update } from '../Tea'
import { Request, empty } from '../data/Request'

export type State = Request
export const initial = empty

export const update: Update<State> = msg => state => {
  switch(msg.type) {

    case "todosRequested": {
      const { retries } = msg.payload
      return { ...state, active: true, error: null, retries }
    }

    case "todosReceived": {
      return { ...state, active: false, error: null, retries: 0 }
    }

    case "todosRequestFailed": {
      const { error } = msg.payload
      return { ...state, active: false, error }
    }

    default: {
      return state
    }
  }
}
