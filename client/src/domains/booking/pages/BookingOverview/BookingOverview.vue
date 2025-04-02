<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const url = `${import.meta.env.VITE_API_URL}/api/V1/rooms`
</script>

<template>
  <BookingLayout>
    <DataProvider :url="url">
      <template #data="{ data }: { data: Room[] }">
        <div class="py-10">
          <RoomGrid :rooms="data" />
        </div>
      </template>
    </DataProvider>
  </BookingLayout>
</template>
