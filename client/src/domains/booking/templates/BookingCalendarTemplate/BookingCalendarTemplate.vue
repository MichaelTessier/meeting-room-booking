<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  defineProps<{
    bookings: any[]
    rooms: Room[]
  }>()
</script>

<template>
  <TimeTable
    :locations="[]"
    :items="[]"
  />
</template>

<style></style>
