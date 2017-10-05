import { View, CreateHandler, jsx } from '../Tea'
import { Request } from '../data/Request'
import { todosRequested } from '../Message'
import { State as TodosRequest } from '../state/todosRequest'

export const view: View<Request> = dispatch => state => {

  if(state.active) {
    return <div>...</div>
  }

  if(state.error) {
    return (
      <div>
        <h3>Error</h3>
        <p>{ state.error }</p>
        <button onClick={ retryClick(dispatch, state) }>Retry</button>
      </div>
    )
  }

  return <div style="display: none" />
}

export const retryClick: CreateHandler<TodosRequest> = (dispatch, state) => _ =>
  dispatch(todosRequested({ retries: state.retries + 1 }))
