import fs from 'node:fs/promises'
import { Booking } from 'meeting-room-booking-types'

const BOOKINGS_URL = 'src/database/bookings/bookings.json'

export const fetchBookings = async () => {
  const bookingsDataString = await fs.readFile(BOOKINGS_URL, 'utf-8')
  const bookingsData = JSON.parse(bookingsDataString) as { bookings: Booking[] }

  return bookingsData.bookings
}

export const fetchBookingsByUserId = async (userId: string) => {
  const bookings = await fetchBookings()

  const booking = bookings.filter(
    (booking) =>
      booking.user.id === userId &&
      booking.dateStart > new Date().toISOString(),
  )

  return booking
}

export const fetchBooking = async (id: string) => {
  const bookings = await fetchBookings()

  const booking = bookings.find((booking) => booking.id === id)

  return booking
}
