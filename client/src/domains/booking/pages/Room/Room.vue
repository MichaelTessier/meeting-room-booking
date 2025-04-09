<script setup lang="ts">
  const roomStore = useRoomStore()

  const { room, isFetching, error } = storeToRefs(roomStore)

  const route = useRoute()

  onBeforeMount(async () => {
    await roomStore.fetchRoom(route.params.slug as string)
  })
</script>

<template>
  <DataLayout
    :is-fetching="isFetching"
    :error="error"
    :data="room"
  >
    <template #data="{ data }">
      <RoomDetail
        :room="data"
        class="mt-10 pt-9"
      />
    </template>
  </DataLayout>
</template>
