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

  onMounted(async () => {
    await roomStore.fetchRooms(route.query.start as string)
    await bookingStore.fetchBookings(route.query.start as string)
  })
</script>

<template>
  <BookingLayout>
    <div class="flex h-full flex-col">
      <BookingFilters />

      <BookingRoomTimeTable
        v-if="rooms.length && bookings.length"
        :rooms="rooms"
        :bookings="bookings"
        class="mb-4"
      />
    </div>
  </BookingLayout>
</template>
