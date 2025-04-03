export interface Equipment {
  id: string
  name: string
  type: EquipmentTypeEnum
  description?: string
  createdAt: string
  updatedAt: string
}

export const EquipmentType = {
  TELEVISION: 'TELEVISION',
  PROJECTOR: 'PROJECTOR',
  WIFI: 'WIFI',
  COMPUTER: 'COMPUTER',
  WHITEBOARD: 'WHITEBOARD',
  KITCHEN: 'KITCHEN',
  PRINTER: 'PRINTER',
  COFFEE_MACHINE: 'COFFEE_MACHINE',
  PHONE: 'PHONE',
  WATER_FOUNTAIN: 'WATER_FOUNTAIN',
} as const

export type EquipmentTypeEnum = typeof EquipmentType[keyof typeof EquipmentType]

// export const enum EquipmentType {
//   TELEVISION = 'TELEVISION',
//   PROJECTOR = 'PROJECTOR',
//   WIFI = 'WIFI',
//   COMPUTER = 'COMPUTER',
//   WHITEBOARD = 'WHITEBOARD',
//   KITCHEN = 'KITCHEN',
//   PRINTER = 'PRINTER',
//   COFFEE_MACHINE = 'COFFEE_MACHINE',
//   PHONE = 'PHONE',
//   WATER_FOUNTAIN = 'WATER_FOUNTAIN',
// }