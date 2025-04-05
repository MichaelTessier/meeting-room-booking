<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  defineProps<{
    bookings: any[]
    rooms: Room[]
  }>()
</script>

<template>
  <BookingLayout>
    <TimeTable
      :locations="[]"
      :items="[]"
    />
  </BookingLayout>
</template>
