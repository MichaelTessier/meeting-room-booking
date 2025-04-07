<script setup lang="ts">
  const roomStore = useRoomStore()
  const bookingStore = useBookingStore()

  const {
    rooms,
    isFetching: roomIsFetching,
    error: roomError,
  } = storeToRefs(roomStore)

  const {
    bookings,
    isFetching: bookingIsFetching,
    error: bookingError,
  } = storeToRefs(bookingStore)

  const route = useRoute()

  const startDate = computed(() => {
    return route.query.start as string
  })

  const fetchData = async () => {
    await roomStore.fetchRooms(startDate.value)
    await bookingStore.fetchBookings(startDate.value)
  }

  onMounted(async () => {
    await fetchData()
  })

  watch(
    () => startDate.value,
    async (newValue) => {
      if (newValue) {
        await fetchData()
      }
    },
    { immediate: true },
  )
</script>

<template>
  <BookingRoomTimeTable
    v-if="rooms.length && bookings.length"
    :rooms="rooms"
    :bookings="bookings"
    :date="startDate"
    class="mb-4"
  />
</template>
