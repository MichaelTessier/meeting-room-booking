import express from 'express'
import { Hello } from 'meeting-room-booking-types'

const router = express.Router()

router.get<{}, Hello>('/', (req, res) => {
  res.json({
    message: 'Hello API',
  })
})

export default router
