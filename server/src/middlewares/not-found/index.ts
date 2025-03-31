import { NextFunction, Request, Response } from 'express'

export function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(404)

  const error = new Error(`Not found - ${req.originalUrl}`)

  next(error)
}
