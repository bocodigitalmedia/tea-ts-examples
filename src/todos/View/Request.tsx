import { jsx, View } from '../Tea'
import { State as Request } from '../State/Request'


export const alert: (text: string) => View<Request> =
  text => _dispatch => state => {
    if(state.active) {
      return <div>{ text }</div>
    } else {
      return <span />
    }
  }
