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

  const dataProxy = computed(() => {
    return {
      rooms: rooms.value,
      bookings: bookings.value,
    }
  })

  const route = useRoute()

  const startDate = computed(() => {
    return route.query.start as string
  })

  const fetchData = async () => {
    await roomStore.fetchRooms(startDate.value)
    await bookingStore.fetchBookings(startDate.value)
  }

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
  <div class="h-full">
    <DataLayout
      :is-fetching="roomIsFetching || bookingIsFetching"
      :error="roomError || bookingError"
      :data="dataProxy"
    >
      <template #data="{ data }">
        <BookingRoomTimeTable
          :rooms="data.rooms"
          :bookings="data.bookings"
          :date="startDate"
          class="mb-4"
        />
      </template>
    </DataLayout>
  </div>
</template>
