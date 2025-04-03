import { NextFunction, Request, Response } from 'express'
import { ErrorResponse } from '@/types'

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  })
}
