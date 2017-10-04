import { Service } from 'tea-ts'
import { Msg, loaded } from './Message'

export const service: Service<Msg> = dispatch => msg => {
  switch(msg.type) {
    case "load": {
      const msg = loaded({
        "1": { text: "First", completed: true },
        "2": { text: "Second", completed: false },
      })

      setTimeout(() => dispatch(msg), 1000)
    }
  }
}
