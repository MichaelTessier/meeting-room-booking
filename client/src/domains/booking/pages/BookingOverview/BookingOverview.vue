<script setup lang="ts">
  const roomStore = useRoomStore()

  const { rooms, isFetching, error } = storeToRefs(roomStore)

  const route = useRoute()

  onBeforeMount(async () => {
    await roomStore.fetchRooms(route.query.start as string)
  })
</script>

<template>
  <BookingLayout>
    <BookingFilters has-times />

    <RoomGrid
      v-if="rooms.length"
      :rooms="rooms"
    />
  </BookingLayout>
</template>
