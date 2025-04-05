<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const { getRoomsUrl } = useRooms()
</script>

<template>
  <BookingLayout>
    <BookingFilters has-times />

    <DataProvider :url="getRoomsUrl">
      <template #data="{ data }: { data: Room[] }">
        <RoomGrid :rooms="data" />
      </template>
    </DataProvider>
  </BookingLayout>
</template>
