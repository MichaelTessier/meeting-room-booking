import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './api/routes'
import { notFoundMiddleware } from './middlewares/not-found'
import { errorMiddleware } from './middlewares/error'

const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app
