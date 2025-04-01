import type { Equipment } from "./equipment";

export interface Room {
  id: string
  name: string
  description?: string
  capacity: number
  createdAt?: string
  updatedAt?: string
  equipments?: Equipment[]
}

