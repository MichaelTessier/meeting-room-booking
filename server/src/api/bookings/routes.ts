import express from 'express'
import { Booking } from 'meeting-room-booking-types'
import type { ApiResponse } from '@/types'
import {
  fetchBooking,
  fetchBookings,
  updateBooking,
  createBooking,
  fetchUserBooking,
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

router.get<{}, ApiResponse<Booking[]>>('/me', async (req, res) => {
  try {
    const response = await fetchUserBooking()

    if (!response) {
      res.status(404).json({ message: 'Bookings not found' })
    } else {
      res.json(response)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching bookings by user id' })
  }
})

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

router.put<{}, ApiResponse<Booking>, { booking: Booking }>(
  '/',
  async (req, res) => {
    try {
      const response = await updateBooking(req.body?.booking)

      if (!response) {
        res.status(404).json({ message: 'Booking not updated' })
      } else {
        res.json(response)
      }
    } catch (error) {
      res.status(500).json({ message: 'Error when creating booking' })
    }
  },
)

router.post<{}, ApiResponse<Booking>, { booking: Booking }>(
  '/',
  async (req, res) => {
    try {
      const response = await createBooking(req.body?.booking)

      if (!response) {
        res.status(404).json({ message: 'Booking not updated' })
      } else {
        res.json(response)
      }
    } catch (error) {
      res.status(500).json({ message: 'Error when creating booking' })
    }
  },
)

export default router
