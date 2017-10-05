export type Request =
  | InactiveRequest
  | ActiveRequest
  | FailedRequest
  | RetryRequest

export interface InactiveRequest {
  readonly status: 'inactive',
  readonly error: null,
  readonly retries: 0,
}

export interface ActiveRequest {
  readonly status: 'active',
  readonly error: null,
  readonly retries: 0,
}

export interface FailedRequest {
  readonly status: 'failed',
  readonly error: string,
  readonly retries: number
}

export interface RetryRequest {
  readonly status: 'retry',
  readonly error: null,
  readonly retries: number
}

export const empty: InactiveRequest = {
  status: 'inactive',
  error: null,
  retries: 0
}
