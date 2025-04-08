interface BookingFiltersState {
  startDate?: string
  time?: Times
}

export const useBookingFiltersStore = defineStore('bookingFiltersStore', {
  state: () =>
    ({
      startDate: undefined,
      time: undefined,
    }) as BookingFiltersState,
})
