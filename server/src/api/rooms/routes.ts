import express from 'express'
import fs from 'node:fs/promises'
import { Room } from 'meeting-room-booking-types'

const router = express.Router()

router.get<{}, Room[]>('/', async (req, res) => {
  try {
    const roomsDataString = await fs.readFile(
      'src/database/rooms.json',
      'utf-8',
    )
    const roomsDataR = JSON.parse(roomsDataString) as { rooms: Room[] }

    const roomsFormatted = roomsDataR.rooms.map((room) => ({
      ...room,
      image: `${process.env.SERVER_URL}/${room.image}`,
    }))

    res.json(roomsFormatted)
  } catch (error) {
    throw new Error('Error reading rooms data')
  }
})

export default router
