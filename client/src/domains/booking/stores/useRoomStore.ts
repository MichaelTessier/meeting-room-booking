import { useFetch } from '@vueuse/core'
import type { Room } from 'meeting-room-booking-types'

interface RoomState {
  rooms: Room[]
  room: Room | undefined
  isFetching: boolean
  error: string | undefined
}

export const useRoomStore = defineStore('roomStore', {
  state: () =>
    ({
      rooms: [],
      room: undefined,
      isFetching: false,
      error: undefined,
    }) as RoomState,
  getters: {},
  actions: {
    async fetchRooms(startDate?: string) {
      const url = new URL(`${import.meta.env.VITE_API_URL}/api/V1/rooms`)

      if (startDate) {
        url.searchParams.append('start', startDate as string)
      }

      const { isFetching, error, data } = await useFetch(url.toString())
        .get()
        .json<Room[]>()

      this.isFetching = isFetching.value
      this.error = error.value
      this.rooms = data.value ?? []
    },
    async fetchRoom(slug?: string) {
      const url = new URL(
        `${import.meta.env.VITE_API_URL}/api/V1/rooms/${slug}`,
      )

      const { isFetching, error, data } = await useFetch(url.toString())
        .get()
        .json<Room>()

      this.isFetching = isFetching.value
      this.error = error.value
      this.room = data.value ?? undefined
    },
  },
})
