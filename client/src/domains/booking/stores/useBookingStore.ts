import { useFetch } from '@vueuse/core'
import type { Booking } from 'meeting-room-booking-types'

interface BookingState {
  bookings: Booking[]
  isFetching: boolean
  error: string | undefined
}

const baseUrl = `${import.meta.env.VITE_API_URL}/api/V1/bookings`

export const useBookingStore = defineStore('bookingStore', {
  state: () =>
    ({
      bookings: [],
      isFetching: false,
      error: undefined,
    }) as BookingState,
  getters: {},
  actions: {
    async fetchBookings(startDate?: string) {
      const url = new URL(baseUrl)

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
    async updateBooking(booking: Booking) {
      const previousBookings = [...this.bookings]

      this.bookings = this.bookings.map((item) => {
        return {
          ...item,
          ...(item.id === booking.id && booking),
        }
      })

      const { data, isFetching, error } = await useFetch(baseUrl)
        .put({ booking })
        .json<Booking>()

      this.isFetching = isFetching.value
      this.error = error.value

      if (error.value) {
        this.bookings = previousBookings

        return
      }
      return data.value
    },
    async createBooking(booking: Booking) {
      const previousBookings = [...this.bookings]

      this.bookings.push(booking)

      const { data, isFetching, error } = await useFetch(baseUrl)
        .post({ booking })
        .json<Booking>()

      this.isFetching = isFetching.value
      this.error = error.value

      if (error.value) {
        this.bookings = previousBookings

        return
      }
      return data.value
    },
    async deleteBooking(id: string) {
      const previousBookings = [...this.bookings]

      this.bookings = this.bookings.filter((item) => item.id !== id)

      const { isFetching, error, data } = await useFetch(`${baseUrl}/${id}`)
        .delete()
        .json<string>()

      this.isFetching = isFetching.value
      this.error = error.value
      if (error.value) {
        this.bookings = previousBookings

        return
      }
      return data.value
    },

    removeLastUserBooking() {
      this.bookings = this.bookings.slice(0, -1)
    },
  },
})
