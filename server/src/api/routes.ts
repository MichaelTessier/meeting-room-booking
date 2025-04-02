import express from 'express'
import helloRoutes from './hello/routes'
import roomsRoutes from './rooms/routes'

const router = express.Router()

router.use('/hello', helloRoutes)
router.use('/rooms', roomsRoutes)

export default router
