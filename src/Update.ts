import { Update } from 'tea-ts'
import { Msg } from './Message'
import { State, onCreated, onToggled, onRemoved, onLoad, onLoaded } from './State'
import { identity } from 'ramda'

export const update: Update<Msg, State> = msg => state => {
  const updateState = updateStateFn(msg)
  return updateState(state)
}

export const updateStateFn = (msg: Msg) => {
  switch(msg.type) {
    case "created": {
      return onCreated(msg)
    }

    case "toggled": {
      return onToggled(msg)
    }

    case "removed": {
      return onRemoved(msg)
    }

    case "load": {
      return onLoad(msg)
    }

    case "loaded": {
      return onLoaded(msg)
    }

    default: {
      return identity
    }
  }
}
