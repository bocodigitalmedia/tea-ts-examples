export interface Request {
  active: boolean,
  error: string | null,
  retries: number
}

export const empty: Request = {
  active: false,
  error: null,
  retries: 0,
}
