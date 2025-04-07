import { type ZonedDateTime } from '@internationalized/date'

interface BookingFiltersState {
  startDate?: ZonedDateTime
  time?: Times
}

export const useBookingFiltersStore = defineStore('bookingFiltersStore', {
  state: () =>
    ({
      startDate: undefined,
      time: undefined,
    }) as BookingFiltersState,
  getters: {
    formattedDate(state) {
      if (!state.startDate) return ''

      const date = new Date(
        `${state.startDate.year}-${state.startDate.month}-${state.startDate.day} ${state.time}`,
      )
      return getLocalISOString(date)
    },
  },
  actions: {
    init(date: Date) {
      this.startDate = toZonedTime(date)
      this.time = getHours(date, true)
    },
  },
})
