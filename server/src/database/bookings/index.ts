import fs from 'node:fs/promises'
import { Booking } from 'meeting-room-booking-types'

const BOOKINGS_URL = 'src/database/bookings/bookings.json'

export const fetchBookings = async (): Promise<Booking[] | undefined> => {
  try {
    const bookingsDataString = await fs.readFile(BOOKINGS_URL, 'utf-8')
    const bookingsData = JSON.parse(bookingsDataString) as {
      bookings: Booking[]
    }

    if (!bookingsData) return undefined

    return bookingsData.bookings
  } catch (error) {
    throw new Error('Error fetching bookings')
  }
}

export const fetchUserBookings = async (): Promise<Booking[] | undefined> => {
  try {
    const bookings = await fetchBookings()

    if (!bookings) return undefined

    const userBookings = bookings
      .filter(
        (booking: Booking) =>
          // 1 is current ID user, it's just for the POC
          booking.user.id === '1' && booking.dateEnd > new Date().toISOString(),
      )
      .map((booking: Booking) => {
        return {
          isPending:
            booking.dateStart > new Date().toISOString() &&
            booking.dateEnd < new Date().toISOString(),
          ...booking,
          // TODO: add Enum for status
        }
      })

    if (!userBookings.length) return undefined

    return userBookings
  } catch (error) {
    throw new Error('Error fetching user bookings')
  }
}

export const fetchBooking = async (
  id: string,
): Promise<Booking | undefined> => {
  try {
    if (!id) {
      throw new Error('Booking ID is required')
    }
    const bookings = await fetchBookings()

    if (!bookings) return undefined

    const booking = bookings.find((booking) => booking.id === id)

    if (!booking) return undefined

    return booking
  } catch (error) {
    throw new Error('Error fetching booking')
  }
}

export const updateBooking = async (
  booking: Booking,
): Promise<Booking | undefined> => {
  try {
    if (!booking?.id) {
      throw new Error('Booking ID is required')
    }
    const bookings = await fetchBookings()

    if (!bookings) return undefined

    const bookingsUpdated =
      bookings?.map((item) => {
        return {
          ...item,
          ...(item.id === booking.id && booking),
        }
      }) ?? []

    await fs.writeFile(
      BOOKINGS_URL,
      JSON.stringify({ bookings: bookingsUpdated }),
    )

    return booking
  } catch (error) {
    throw new Error('Error when updating booking')
  }
}

export const createBooking = async (
  booking: Booking,
): Promise<Booking | undefined> => {
  try {
    if (!booking) {
      throw new Error('Booking is required')
    }
    const bookings = await fetchBookings()

    if (!bookings) return undefined

    const newBooking = {
      ...booking,
      id: new Date().getUTCMilliseconds().toString(),
    }

    bookings.push(newBooking)

    await fs.writeFile(BOOKINGS_URL, JSON.stringify({ bookings }))

    return newBooking
  } catch (error) {
    throw new Error('Error creating booking')
  }
}

export const deleteBooking = async (
  id: string,
): Promise<string | undefined> => {
  try {
    if (!id) {
      throw new Error('Booking ID is required')
    }
    const bookings = await fetchBookings()

    if (!bookings) return undefined

    const bookingsUpdated = bookings.filter((item) => item.id !== id)

    await fs.writeFile(
      BOOKINGS_URL,
      JSON.stringify({ bookings: bookingsUpdated }),
    )
    return id
  } catch (error) {
    throw new Error('Error deleting booking')
  }
}
