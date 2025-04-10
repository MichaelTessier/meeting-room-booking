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

export const fetchRooms = async ({ filters }: FetchRoomsOptions = {}): Promise<
  Room[] | undefined
> => {
  try {
    const [roomsDataString, bookings] = await Promise.all([
      fs.readFile(ROOMS_URL, 'utf-8'),
      fetchBookings(),
    ])

    if (!roomsDataString) return undefined

    const roomsData = JSON.parse(roomsDataString) as { rooms: Room[] }
    const startDate = filters?.start ? new Date(filters.start) : new Date()

    const rooms =
      roomsData?.rooms?.map((room) => {
        const roomBookings =
          bookings?.filter((booking) => booking.room.id === room.id) ?? []

        const hasBooking =
          roomBookings?.some((booking) => {
            const bookingStart = new Date(booking.dateStart)
            const bookingEnd = new Date(booking.dateEnd)
            return startDate >= bookingStart && startDate <= bookingEnd
          }) ?? false

        return {
          ...room,
          isAvailable: !hasBooking,
        }
      }) ?? []

    return rooms
  } catch (error) {
    throw new Error('Error when fetching rooms')
  }
}

export const fetchRoom = async (slug: string): Promise<Room | undefined> => {
  try {
    if (!slug) {
      throw new Error('Room slug is required')
    }

    const rooms = await fetchRooms()

    if (!rooms) return undefined

    const room = rooms.find((room) => room.slug === slug)

    if (!room) return undefined

    return room
  } catch (error) {
    throw new Error('Error fetching room')
  }
}
