<script setup lang="ts">
  import type { Booking, Room } from 'meeting-room-booking-types'
  import { type TimeTableItem, type TimeTableLocation } from 'vue3-timetable'

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
  const date = computed(() => {
    return (route.query.start as string) ?? ''
  })

  const isUpdateDialogOpen = ref(false)
  const selectedBookingId = ref<string>('')
  const selectedBooking = computed(() => {
    return props.bookings.find(
      (booking) => booking.id === selectedBookingId.value,
    )
  })

  const onBookingClick = (item: TimeTableItem) => {
    isUpdateDialogOpen.value = true
    selectedBookingId.value = item.id.toString()
  }

  const selectedRoomId = ref<string>('')
  const isCreateDialogOpen = ref(false)
  const selectedRoom = computed(() => {
    return props.rooms.find((room) => room.id === selectedRoomId.value)
  })

  const onRoomClick = (item: TimeTableLocation) => {
    isCreateDialogOpen.value = true
    console.log('🚀 ~ onBookingClick ~ isDialogOpen:', isCreateDialogOpen.value)
    selectedRoomId.value = item.id.toString()
  }
</script>

<template>
  <div class="h-full">
    <TimeTable
      :locations="locations"
      :date="date"
      @item-click="onBookingClick"
      @location-click="onRoomClick"
    />

    <BookingUpdateDialog
      v-if="selectedBooking"
      :key="selectedBooking.id"
      v-model:open="isUpdateDialogOpen"
      :booking="selectedBooking"
      @submit="isUpdateDialogOpen = false"
    />

    <BookingCreateDialog
      v-if="selectedRoom"
      :key="selectedRoom.id"
      v-model:open="isCreateDialogOpen"
      :room="selectedRoom"
      @submit="isCreateDialogOpen = false"
    />
  </div>
</template>
