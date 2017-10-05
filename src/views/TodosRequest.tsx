import { View, CreateHandler, jsx } from '../Tea'
import { Request } from '../data/Request'
import { todosRequestRetried } from '../Message'
import { State as TodosRequest } from '../state/todosRequest'

export const view: View<Request> = dispatch => state => {
  switch(state.status) {
    case 'inactive': {
      return inactive(dispatch)(state)
    }
    case 'active': {
      return active(dispatch)(state)
    }
    case 'failed': {
      return failed(dispatch)(state)
    }
    case 'retry': {
      return retry(dispatch)(state)
    }
  }
}

export const inactive: View<Request> = _ => _ => (
  <span />
)

export const active: View<Request> = _ => _ => (
  <div>Loading todos...</div>
)

export const failed: View<Request> = dispatch => state => (
  <div>
    <h3>Error</h3>
    <p>{ state.error }</p>
    <button onClick={ retryClick(dispatch, state) }>Retry</button>
  </div>
)

export const retry: View<Request> = _ => _ => (
  <div>Retrying...</div>
)

export const retryClick: CreateHandler<TodosRequest> = (dispatch, state) => _ =>
  dispatch(todosRequestRetried({ retries: state.retries + 1 }))
