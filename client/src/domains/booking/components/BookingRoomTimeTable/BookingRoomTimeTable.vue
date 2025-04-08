<script setup lang="ts">
  import type { Booking, Room } from 'meeting-room-booking-types'
  import { type TimeTableItem } from 'vue3-timetable'

  const props = defineProps<{
    rooms: Room[]
    bookings: Booking[]
  }>()

  const userStore = useUserStore()

  const locations = computed<TimeTableItem[]>(() => {
    if (!props.rooms || !props.bookings) {
      return []
    }
    return props.rooms.map((room) => ({
      id: room.id,
      name: room.name,
      items: props.bookings
        .filter((booking) => booking.room.id === room.id)
        .map((booking) => ({
          id: booking.id,
          startDate: booking.dateStart,
          endDate: booking.dateEnd,
          name: booking.title,
          info: booking.description,
          style: {
            backgroundColor:
              userStore.user?.id === booking.user?.id ? '#3a82f6' : '#34435c',
          },
        })),
    }))
  })

  const route = useRoute()

  const isDialogOpen = ref(false)
  const selectedBookingId = ref<string>('')
  const onBookingClick = (item: TimeTableItem) => {
    isDialogOpen.value = true
    console.log('🚀 ~ onBookingClick ~ isDialogOpen:', isDialogOpen.value)
    selectedBookingId.value = item.id.toString()
  }

  const selectedBooking = computed(() => {
    return props.bookings.find(
      (booking) => booking.id === selectedBookingId.value,
    )
  })
</script>

<template>
  <div class="h-full">
    <TimeTable
      :locations="locations"
      :date="route.query.start as string"
      @item-click="onBookingClick"
    />

    <BookingFormDialog
      v-if="selectedBooking"
      :key="selectedBooking.id"
      v-model:open="isDialogOpen"
      :booking="selectedBooking"
      @submit="isDialogOpen = false"
    />
  </div>
</template>
