<script setup lang="ts">
  import type { Hello } from 'meeting-room-booking-types'

  const url = `${import.meta.env.VITE_API_URL}/api/V1/hello`
</script>

<template>
  <BookingLayout :title="'BookingLayout'">
    <div class="flex justify-center items-center h-[500px]">
      <DataProvider :url="url">
        <template #data="{ data }: { data: Hello }">
          {{ data.message }}
        </template>
      </DataProvider>
    </div>
  </BookingLayout>
</template>
