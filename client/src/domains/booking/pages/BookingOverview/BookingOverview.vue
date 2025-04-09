<script setup lang="ts">
  const roomStore = useRoomStore()

  const { rooms, isFetching, error } = storeToRefs(roomStore)

  const route = useRoute()

  onBeforeMount(async () => {
    await roomStore.fetchRooms(route.query.start as string)
  })

  watch(
    () => route.query.start,
    async (newValue) => {
      await roomStore.fetchRooms(newValue as string)
    },
    { immediate: true },
  )
</script>

<template>
  <DataLayout
    :is-fetching="isFetching"
    :error="error"
    :data="rooms"
  >
    <template #data="{ data }">
      <RoomGrid :rooms="data" />
    </template>
  </DataLayout>
</template>
