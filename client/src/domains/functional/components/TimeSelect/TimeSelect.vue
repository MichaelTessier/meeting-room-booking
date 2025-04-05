<script setup lang="ts">
  const TIMES = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ]

  const modelValue = defineModel<string>('modelValue', {
    default: getCurrentHours(true),
  })
</script>

<template>
  <Select v-model="modelValue">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Start" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          v-for="time in TIMES"
          :key="time"
          :value="time"
        >
          {{ time }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
