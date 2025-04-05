import { Room } from 'meeting-room-booking-types'

export function formatRoom(room: Room): Room {
  return {
    ...room,
    // FAKE external processing
    image: `${process.env.SERVER_URL}/${room.image}`,
  }
}
