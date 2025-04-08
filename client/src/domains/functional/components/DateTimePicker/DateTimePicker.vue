<script setup lang="ts">
  interface Props {
    date: string
    hideTime?: boolean
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    'update:date': [string]
  }>()

  const timeModel = computed({
    get: () => {
      return getHours(new Date(props.date), true)
    },
    set: (time) => {
      const formattedDate = zonedDateToISOString(date.value, time)

      emit('update:date', formattedDate)
    },
  })

  const date = computed({
    get: () => {
      return toZonedTime(new Date(props.date))
    },
    set: (value) => {
      const formattedDate = zonedDateToISOString(value, timeModel.value)
      emit('update:date', formattedDate)
    },
  })
</script>

<template>
  <div class="flex flex-row gap-4">
    <DatePicker v-model="date" />
    <TimeSelect
      v-if="!hideTime"
      v-model="timeModel"
    />
  </div>
</template>
