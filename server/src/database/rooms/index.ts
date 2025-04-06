import fs from 'node:fs/promises'
import { Room } from 'meeting-room-booking-types'
import { fetchBookings } from '../bookings'

const ROOMS_URL = 'src/database/rooms/rooms.json'

interface FetchRoomsOptions {
  filters?: FetchRoomsFilters
}
interface FetchRoomsFilters {
  start?: string
}

export const fetchRooms = async ({ filters }: FetchRoomsOptions = {}) => {
  const [roomsDataString, bookings] = await Promise.all([
    fs.readFile(ROOMS_URL, 'utf-8'),
    fetchBookings(),
  ])
  const roomsData = JSON.parse(roomsDataString) as { rooms: Room[] }
  const startDate = filters?.start ? new Date(filters.start) : new Date()

  const rooms = roomsData.rooms.map((room) => {
    const roomBookings = bookings.filter(
      (booking) => booking.room.id === room.id,
    )

    const hasBooking = roomBookings.some((booking) => {
      const bookingStart = new Date(booking.dateStart)
      const bookingEnd = new Date(booking.dateEnd)
      return startDate >= bookingStart && startDate <= bookingEnd
    })

    return {
      ...room,
      isAvailable: !hasBooking,
    }
  })

  // if (filters?.start) {
  //   const startDate = new Date(filters.start)
  //   const filteredRooms = rooms.filter((room) => {
  //     if (!room?.bookings?.length) return true

  //     const isNotAvailable = room.bookings.some((booking) => {
  //       const bookingStart = new Date(booking.dateStart)
  //       const bookingEnd = new Date(booking.dateEnd)

  //       return startDate >= bookingStart && startDate <= bookingEnd
  //     })

  //     return !isNotAvailable
  //   })

  //   return filteredRooms
  // }

  return rooms
}

export const fetchRoom = async (slug: string) => {
  const rooms = await fetchRooms()

  const room = rooms.find((room) => room.slug === slug)

  return room
}
