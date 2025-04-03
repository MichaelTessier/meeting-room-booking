<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const route = useRoute()

  const url = `${import.meta.env.VITE_API_URL}/api/V1/rooms/${route.params.slug}`
</script>

<template>
  <BookingLayout>
    <DataProvider :url="url">
      <template #data="{ data }: { data: Room }">
        <RoomTemplate :room="data" />
      </template>
    </DataProvider>
  </BookingLayout>
</template>
