import type { Equipment } from "./equipment";

export interface Room {
  id: string
  name: string
  slug: string
  image: string
  description?: string
  isAvailable: boolean
  capacity: number
  createdAt: string
  updatedAt: string
  equipments?: Equipment[]
}

