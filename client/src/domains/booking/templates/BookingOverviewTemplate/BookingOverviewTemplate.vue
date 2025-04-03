<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  defineProps<{
    rooms: Room[]
  }>()
</script>

<template>
  <div class="py-10">
    <RoomGrid :rooms="rooms" />
  </div>
</template>
