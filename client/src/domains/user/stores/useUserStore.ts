import { useFetch } from '@vueuse/core'
import type { User, Booking } from 'meeting-room-booking-types'

interface UserState {
  user?: User
  bookings: Booking[]
}

export const useUserStore = defineStore('userStore', {
  state: () =>
    ({
      user: undefined,
      bookings: [],
    }) as UserState,
  getters: {
    sortedBookings: (state) => {
      return state.bookings.sort((a, b) => {
        const dateA = new Date(a.dateStart)
        const dateB = new Date(b.dateStart)
        return dateA.getTime() - dateB.getTime()
      })
    },
  },
  actions: {
    async fetchUser() {
      // FAKE USER DATA
      const { isFetching, error, data } = await useFetch(
        `${import.meta.env.VITE_API_URL}/api/V1/users/1`,
      )
        .get()
        .json<User>()

      if (error.value) {
        console.error('Error fetching user data:', error.value)
        return
      }

      if (isFetching.value) {
        console.info('Fetching user data...')
      }

      if (data.value) {
        this.user = data.value
      }
    },
    async fetchUserBookings() {
      if (!this.user) return

      const { isFetching, error, data } = await useFetch(
        `${import.meta.env.VITE_API_URL}/api/V1/bookings/me`,
      )
        .get()
        .json<Booking[]>()

      if (error.value) {
        console.error('Error fetching user bookings:', error.value)
        return
      }

      if (isFetching.value) {
        console.info('Fetching user bookings...')
      }

      if (data.value) {
        this.bookings = data.value
      }
    },
    updateUserBooking(booking: Booking) {
      this.bookings = this.bookings.map((item) => {
        return {
          ...item,
          ...(item.id === booking.id && booking),
        }
      })
    },
    addUserBooking(booking: Booking) {
      this.bookings.push(booking)
    },
    removeLastUserBooking() {
      this.bookings = this.bookings.slice(0, -1)
    },
    removeUserBooking(id: string) {
      this.bookings = this.bookings.filter((booking) => booking.id !== id)
    },
  },
})
