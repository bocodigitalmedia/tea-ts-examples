export interface State {
  active: boolean,
  error: string | null
}

export const initial: State = {
  active: false,
  error: null
}

export const setActive = (state: State): State => ({
  ...state, active: true
})

export const setInactive = (state: State): State => ({
  ...state, active: false
})

export const setError = (error: string) => (state: State): State => ({
  ...state, error, active: false
})

export const clearError = (state: State): State => ({
  ...state, error: null
})
