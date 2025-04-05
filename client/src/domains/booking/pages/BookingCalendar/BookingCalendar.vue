<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const { getRoomsUrl } = useRooms()
</script>

<template>
  <BookingLayout>
    <div class="flex h-full flex-col">
      <BookingFilters />

      <DataProvider :url="getRoomsUrl">
        <template #data="{ data }: { data: Room[] }">
          <BookingRoomTimeTable
            :rooms="data"
            class="mb-4"
          />
        </template>
      </DataProvider>
    </div>
  </BookingLayout>
</template>
