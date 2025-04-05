<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'
  import { type TimeTableItem } from 'vue3-timetable'

  const props = defineProps<{
    rooms: Room[]
  }>()

  const locations = computed<TimeTableItem[]>(() => {
    return props.rooms.map((room) => ({
      id: room.id,
      name: room.name,
      items: room.bookings.map((booking) => ({
        id: booking.id,
        startDate: booking.dateStart,
        endDate: booking.dateEnd,
        name: booking.title,
        info: booking.description,
        style: {
          backgroundColor: 'red',
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
    :items="[]"
    :date="date"
  />
</template>
