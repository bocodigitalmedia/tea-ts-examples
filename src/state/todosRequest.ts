import { Update } from '../Tea'
import { Request, empty } from '../data/Request'

export type State = Request

export const initial = empty

export const update: Update<State> = msg => state => {
  switch(msg.type) {

    case 'TodosRequested': {
      return { ...state, status: 'active', error: null, retries: 0 as 0 }
    }

    case 'TodosReceived': {
      return { status: 'inactive', error: null, retries: 0 as 0 }
    }

    case 'TodosRequestFailed': {
      const { error, retries } = msg.payload
      return { ...state, status: 'failed', error, retries }
    }

    case 'TodosRequestRetried': {
      const { retries } = msg.payload
      return { ...state, status: 'retry', error: null, retries }
    }

    default: {
      return state
    }
  }
}
