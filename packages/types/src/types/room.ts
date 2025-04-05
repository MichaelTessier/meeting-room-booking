import { Booking } from "./booking";
import type { Equipment } from "./equipment";

export interface Room {
  id: string
  name: string
  slug: string
  image: string
  description?: string
  bookings: Omit<Booking, 'room'>[]
  capacity: number
  createdAt: string
  updatedAt: string
  equipments?: Equipment[]
}

