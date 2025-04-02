<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  defineProps<{
    rooms: Room[]
  }>()
</script>

<template>
  <div
    class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    data-test="room-grid"
  >
    <RoomCard
      v-for="room in rooms"
      :key="room.id"
      :room="room"
    />
  </div>
</template>
