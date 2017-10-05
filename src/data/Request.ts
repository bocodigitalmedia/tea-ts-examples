export interface Request {
  readonly active: boolean,
  readonly error: string | null,
  readonly retries: number
}

export const empty: Request = {
  active: false,
  error: null,
  retries: 0,
}
