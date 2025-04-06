<script setup lang="ts">
  const roomStore = useRoomStore()

  const { room, isFetching, error } = storeToRefs(roomStore)

  const route = useRoute()

  onBeforeMount(async () => {
    await roomStore.fetchRoom(route.params.slug as string)
  })
</script>

<template>
  <BookingLayout>
    <RoomDetail
      v-if="room"
      :room="room"
    />
  </BookingLayout>
</template>
