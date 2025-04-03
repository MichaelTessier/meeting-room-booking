import express from 'express'
import { Room } from 'meeting-room-booking-types'
import { formatRoom } from './formatters'
import type { ApiResponse } from '@/types'
import { fetchRoom, fetchRooms } from '@/database/rooms'

const router = express.Router()

router.get<{}, ApiResponse<Room[]>>('/', async (req, res) => {
  try {
    const response = await fetchRooms()

    if (!response) {
      res.status(404).json({ message: 'Rooms not found' })
    } else {
      const rooms = response.map(formatRoom)

      res.json(rooms)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching rooms' })
  }
})

router.get<{ slug: string }, ApiResponse<Room>>('/:slug', async (req, res) => {
  try {
    const response = await fetchRoom(req.params.slug)

    if (!response) {
      res.status(404).json({ message: 'Room not found' })
    } else {
      const room = formatRoom(response)
      res.json(room)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching room' })
  }
})

export default router
