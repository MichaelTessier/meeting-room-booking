<script setup lang="ts">
  import { type DateValue } from '@internationalized/date'
  import { getLocalTimeZone, today } from '@internationalized/date'

  const props = defineProps<{
    hasTimes?: boolean
  }>()

  const time = ref<string>(getCurrentHours(true))
  const date = ref<DateValue>(today(getLocalTimeZone()))

  const router = useRouter()
  const route = useRoute()

  const startDate = computed(() => {
    const _time = props.hasTimes ? time.value : undefined

    if (!date.value) return

    const _date = _time
      ? new Date(`${date?.value?.toString()} ${_time}`)
      : new Date(date?.value?.toString())

    return getLocalISOString(_date)
  })

  const onClick = () => {
    router.push({
      name: route.name,
      query: {
        ...(startDate.value && {
          start: startDate.value,
        }),
      },
    })
  }
</script>
<template>
  <div class="mb-8 flex justify-between">
    <div class="flex gap-4">
      <DatePicker v-model="date" />
      <TimeSelect
        v-if="hasTimes"
        v-model="time"
      />
    </div>
    <Button @click="onClick">Search</Button>
  </div>
</template>
