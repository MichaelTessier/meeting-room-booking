import fs from 'node:fs/promises'
import { Booking } from 'meeting-room-booking-types'

const BOOKINGS_URL = 'src/database/bookings/bookings.json'

export const fetchBookings = async () => {
  const bookingsDataString = await fs.readFile(BOOKINGS_URL, 'utf-8')
  const bookingsData = JSON.parse(bookingsDataString) as { bookings: Booking[] }

  return bookingsData.bookings
}

export const fetchUserBooking = async () => {
  const bookings = await fetchBookings()

  const booking = bookings.filter(
    (booking) =>
      // 1 is current ID user, it's just for the POC
      booking.user.id === '1' && booking.dateStart > new Date().toISOString(),
  )

  return booking
}

export const fetchBooking = async (id: string) => {
  if (!id) {
    throw new Error('Booking ID is required')
  }
  const bookings = await fetchBookings()

  const booking = bookings.find((booking) => booking.id === id)

  return booking
}

export const updateBooking = async (booking: Booking) => {
  if (!booking?.id) {
    throw new Error('Booking ID is required')
  }
  const bookings = await fetchBookings()

  const bookingsUpdated = bookings.map((item) => {
    return {
      ...item,
      ...(item.id === booking.id && booking),
    }
  })

  await fs.writeFile(
    BOOKINGS_URL,
    JSON.stringify({ bookings: bookingsUpdated }),
  )

  return booking
}

export const createBooking = async (booking: Booking) => {
  if (!booking) {
    throw new Error('Booking is required')
  }
  const bookings = await fetchBookings()

  const newBooking = {
    ...booking,
    id: new Date().getUTCMilliseconds().toString(),
  }

  bookings.push(newBooking)

  await fs.writeFile(BOOKINGS_URL, JSON.stringify({ bookings }))

  return newBooking
}
