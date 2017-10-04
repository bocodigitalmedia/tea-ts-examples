import { Update } from '../Tea'

export type State = {
  active: boolean,
}

export const initial = {
  active: false,
}

export const update: Update<State> = msg => state => {
  switch(msg.type) {
    case "todosRequested": {
      return { ...state, active: true}
    }
    case "todosReceived": {
      return { ...state, active: false }
    }
    default: {
      return state
    }
  }
}
