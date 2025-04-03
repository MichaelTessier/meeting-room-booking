import fs from 'node:fs/promises'
import { Room } from 'meeting-room-booking-types'

const ROOMS_URL = 'src/database/rooms/rooms.json'

export const fetchRooms = async () => {
  const roomsDataString = await fs.readFile(ROOMS_URL, 'utf-8')
  const roomsData = JSON.parse(roomsDataString) as { rooms: Room[] }

  return roomsData.rooms
}

export const fetchRoom = async (slug: string) => {
  const roomsDataString = await fs.readFile(ROOMS_URL, 'utf-8')
  const roomsData = JSON.parse(roomsDataString) as { rooms: Room[] }

  const room = roomsData.rooms.find((room) => room.slug === slug)

  return room
}
