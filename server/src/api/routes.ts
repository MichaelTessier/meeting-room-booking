import express from 'express'
import helloRoutes from './hello/routes'

const router = express.Router()

router.use('/hello', helloRoutes)

export default router
