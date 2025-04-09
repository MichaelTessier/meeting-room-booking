<script setup lang="ts">
  const router = useRouter()
  const route = useRoute()

  const bookingFiltersStore = useBookingFiltersStore()
  const { startDate } = storeToRefs(bookingFiltersStore)

  onMounted(() => {
    const date = route.query?.start
      ? new Date(route.query.start as string)
      : new Date()

    bookingFiltersStore.$patch({ startDate: getLocalISOString(date) })
  })

  watch(
    () => startDate,
    (startDate) => {
      if (!startDate?.value) return

      console.log('object')

      router.push({
        name: route.name,
        query: {
          start: startDate.value,
        },
      })
    },
    { deep: true },
  )
</script>
<template>
  <DateTimePicker
    v-if="startDate"
    v-model:date="startDate"
    :hide-time="!route.meta?.hasTimeFilter"
  />
</template>
