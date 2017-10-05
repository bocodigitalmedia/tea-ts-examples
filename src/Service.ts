import { Service } from './Tea'
import { todosReceived, todosRequestFailed } from './Message'

export const service: Service = dispatch => msg => {

  switch(msg.type) {

    case 'TodosRequested':
    case 'TodosRequestRetried': {

      const received = todosReceived({
        '1': { text: 'First', completed: true },
        '2': { text: 'Second', completed: false },
      })

      const failed = todosRequestFailed({
        error: 'Could not load todos',
        retries: msg.payload.retries
      })

      const requestMsg = msg.payload.retries < 1 ? failed : received

      setTimeout(() => dispatch(requestMsg), 1000)

      break
    }

  }
}
