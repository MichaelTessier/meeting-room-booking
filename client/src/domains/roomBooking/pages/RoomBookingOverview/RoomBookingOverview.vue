<script setup lang="ts">
  const url = `${import.meta.env.VITE_API_URL}/api/V1/hello`
</script>

<template>
  <RoomBookingLayout :title="'RoomBookingLayout'">
    <div class="flex justify-center items-center h-[500px]">
      <DataProvider :url="url">
        <template #data="{ data }: { data: any }">
          {{ data.text }}
        </template>
      </DataProvider>
    </div>
  </RoomBookingLayout>
</template>
