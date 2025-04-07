<script setup lang="ts">
  import { type DateValue } from '@internationalized/date'

  const router = useRouter()
  const route = useRoute()

  const bookingFiltersStore = useBookingFiltersStore()
  const { time, startDate } = storeToRefs(bookingFiltersStore)

  const onDateUpdate = (value?: DateValue) => {
    bookingFiltersStore.$patch({ startDate: value })
  }

  const onTimeUpdate = (value?: string) => {
    bookingFiltersStore.$patch({ time: value })
  }

  const onClick = () => {
    router.push({
      name: route.name,
      query: {
        start: bookingFiltersStore.formattedDate,
      },
    })
  }

  onMounted(() => {
    const date = route.query?.start
      ? new Date(route.query.start as string)
      : new Date()
    bookingFiltersStore.init(date)
  })
</script>
<template>
  <div class="mb-8 flex justify-between">
    <div class="flex gap-4">
      <DatePicker
        v-if="route.meta?.hasDateFilter"
        v-model="startDate"
        @update:model-value="(date) => onDateUpdate(date)"
      />
      <TimeSelect
        v-if="route.meta?.hasTimeFilter"
        v-model="time"
        @update:model-value="(time) => onTimeUpdate(time)"
      />
    </div>
    <Button @click="onClick">Search</Button>
  </div>
</template>
