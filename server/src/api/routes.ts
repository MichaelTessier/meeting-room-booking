import express from 'express'
import helloRoutes from './hello/routes'
import usersRoutes from './users/routes'
import roomsRoutes from './rooms/routes'
import bookingsRoutes from './bookings/routes'

const router = express.Router()

router.use('/hello', helloRoutes)
router.use('/rooms', roomsRoutes)
router.use('/users', usersRoutes)
router.use('/bookings', bookingsRoutes)

export default router
