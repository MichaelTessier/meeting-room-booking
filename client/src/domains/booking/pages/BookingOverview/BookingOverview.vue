<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const route = useRoute()

  const url = computed(() => {
    const url = new URL(`${import.meta.env.VITE_API_URL}/api/V1/rooms`)

    if (route.query.start) {
      url.searchParams.append('start', route.query.start as string)
    }

    return url.toString()
  })
</script>

<template>
  <BookingLayout>
    <BookingFilters />

    <DataProvider :url="url">
      <template #data="{ data }: { data: Room[] }">
        <RoomGrid :rooms="data" />
      </template>
    </DataProvider>
  </BookingLayout>
</template>
