import { Service } from './Tea'
import { todosReceived } from './Event'

export const service: Service = dispatch => msg => {

  switch(msg.type) {

    case "todosRequested": {
      const msg = todosReceived({
        "1": { text: "First", completed: true },
        "2": { text: "Second", completed: false },
      })

      setTimeout(() => dispatch(msg), 1000)
      break
    }

  }
}
