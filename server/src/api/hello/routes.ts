import express from 'express'
import { HelloResponse } from './models'

const router = express.Router()

router.get<{}, HelloResponse>('/', (req, res) => {
  res.json({
    text: 'Hello API',
  })
})

export default router
