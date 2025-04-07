<script setup lang="ts">
  import { TIMES } from '@/utils/date'

  const modelValue = defineModel<string>('modelValue', {
    default: getHours(new Date(), true),
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
