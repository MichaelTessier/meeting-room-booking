<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const url = `${import.meta.env.VITE_API_URL}/api/V1/rooms`
</script>

<template>
  <BookingLayout>
    <KeepAlive>
      <DataProvider :url="url">
        <template #data="{ data }: { data: Room[] }">
          <BookingOverviewTemplate :rooms="data" />
        </template>
      </DataProvider>
    </KeepAlive>
  </BookingLayout>
</template>
