export interface ErrorResponse {
  message: string
  stack?: string
}

export type ApiResponse<T> = T | ErrorResponse

// export interface ApiResponse<T> {
//   data: T | null
//   error?: ErrorResponse
// }
