export interface State {
  active: boolean
}

export const initial: State = {
  active: false
}

export const setActive = (state: State): State => ({
  ...state, active: true
})

export const setInactive = (state: State): State => ({
  ...state, active: false
})
