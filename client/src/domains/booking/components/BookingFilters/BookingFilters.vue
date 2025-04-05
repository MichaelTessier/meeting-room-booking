<script setup lang="ts">
  import { type DateValue } from '@internationalized/date'

  const time = ref<string>()
  const date = ref<DateValue>()

  const router = useRouter()

  const startDate = computed(() => {
    if (!date.value || !time.value) {
      return undefined
    }

    return getLocalISOString(
      new Date(`${date?.value?.toString()} ${time.value}`),
    )
  })

  const onClick = () => {
    router.push({
      name: 'booking-overview',
      query: {
        ...(startDate.value && {
          start: getLocalISOString(
            new Date(`${date?.value?.toString()} ${time.value}`),
          ),
        }),
      },
    })
  }
</script>
<template>
  <div class="mb-8 flex justify-between">
    <div class="flex gap-4">
      <DatePicker v-model="date" />
      <TimeSelect v-model="time" />
    </div>
    <Button @click="onClick">Search</Button>
  </div>
</template>
