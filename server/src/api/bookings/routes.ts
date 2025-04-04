import express from 'express'
import { Booking } from 'meeting-room-booking-types'
// import { formatRoom } from './formatters'
import type { ApiResponse } from '@/types'
import {
  fetchBooking,
  fetchBookings,
  fetchBookingsByUserId,
} from '@/database/bookings'

const router = express.Router()

router.get<{}, ApiResponse<Booking[]>>('/', async (req, res) => {
  try {
    const response = await fetchBookings()

    if (!response) {
      res.status(404).json({ message: 'Bookings not found' })
    } else {
      res.json(response)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching bookings' })
  }
})

router.get<{ id: string }, ApiResponse<Booking[]>>(
  '/users/:id',
  async (req, res) => {
    try {
      const response = await fetchBookingsByUserId(req.params.id)

      if (!response) {
        res.status(404).json({ message: 'Bookings not found' })
      } else {
        res.json(response)
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error when fetching bookings by user id' })
    }
  },
)

router.get<{ id: string }, ApiResponse<Booking>>('/:id', async (req, res) => {
  try {
    const response = await fetchBooking(req.params.id)

    if (!response) {
      res.status(404).json({ message: 'Booking not found' })
    } else {
      res.json(response)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching booking' })
  }
})

export default router
