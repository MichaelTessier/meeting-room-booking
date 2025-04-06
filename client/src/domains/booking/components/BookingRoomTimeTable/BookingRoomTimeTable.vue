<script setup lang="ts">
  import type { Booking, Room } from 'meeting-room-booking-types'
  import { type TimeTableItem } from 'vue3-timetable'

  const props = defineProps<{
    rooms: Room[]
    bookings: Booking[]
  }>()

  const userStore = useUserStore()

  const locations = computed<TimeTableItem[]>(() => {
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
    const date = route.query.start
      ? new Date(route.query.start as string)
      : new Date()

    // format to YYYY-MM-DD, little hacky but native
    return date.toLocaleDateString('fr-CA')
  })
</script>

<template>
  <TimeTable
    :locations="locations"
    :date="date"
  />
</template>
