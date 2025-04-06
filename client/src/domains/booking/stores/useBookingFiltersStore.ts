import { useFetch } from '@vueuse/core'
import type { Booking } from 'meeting-room-booking-types'

interface BookingFiltersState {
  startDate: Date
  time: boolean
}

export const useBookingStore = defineStore('bookingStore', {
  state: () =>
    ({
      bookings: [],
      isFetching: false,
      error: undefined,
    }) as BookingFiltersState,
  getters: {},
  actions: {
    async fetchBookings(startDate?: string) {
      const url = new URL(`${import.meta.env.VITE_API_URL}/api/V1/bookings`)

      if (startDate) {
        url.searchParams.append('start', startDate as string)
      }

      const { isFetching, error, data } = await useFetch(url.toString())
        .get()
        .json<Booking[]>()

      this.isFetching = isFetching.value
      this.error = error.value
      this.bookings = data.value ?? []
    },
  },
})
