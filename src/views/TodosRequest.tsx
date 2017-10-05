import el from 'inferno-create-element'

import { View } from '../Tea'
import { Request } from '../data/Request'
import { todosRequested } from '../Message'

export const view: View<Request> = dispatch => state => {

  if(state.active) {
    return viewActive(dispatch, state)
  }

  if(state.error !== null) {
    return viewError(dispatch, state)
  }

  return (<div style='display: none'/>)
}

export const viewActive = (_dispatch, _state) => (
  <div>....</div>
)

export const viewError = (dispatch, state) => (
  <div>
    <h3>Could not load todos</h3>
    <p>{ state.error }</p>
    <button onClick={ retryClick(dispatch, state) }>Retry</button>
  </div>
)

export const retryClick = (dispatch, state) => _ =>
  dispatch(todosRequested({ retries: state.retries + 1 }))
