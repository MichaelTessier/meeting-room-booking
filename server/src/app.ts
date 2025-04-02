import express from 'express'

import bodyParser from 'body-parser'

import cors from 'cors'
import helmet from 'helmet'
import routes from './api/routes'
import { notFoundMiddleware } from './middlewares/not-found'
import { errorMiddleware } from './middlewares/error'
import { corsMiddleware } from './middlewares/cors'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.disable('x-powered-by')
// app.use(
//   cors({
//     origin: 'http://localhost:5173/',
//   }),
// )
app.use(corsMiddleware())
app.use(helmet())

// use body parser
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use('/api/v1', routes)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app
