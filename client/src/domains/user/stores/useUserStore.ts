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
  getters: {},
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
    async fetchBookings() {
      if (!this.user) return

      const { isFetching, error, data } = await useFetch(
        `${import.meta.env.VITE_API_URL}/api/V1/bookings/users/${this.user?.id}`,
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
  },
})
