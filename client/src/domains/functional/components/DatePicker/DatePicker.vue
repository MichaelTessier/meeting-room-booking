<script setup lang="ts">
  import { cn } from '@/lib/shadcn/utils'
  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
    today,
  } from '@internationalized/date'

  const df = new DateFormatter('en-US', {
    dateStyle: 'long',
  })

  const modelValue = defineModel<DateValue | undefined>('modelValue', {
    default: today(getLocalTimeZone()),
  })
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !modelValue && 'text-muted-foreground',
          )
        "
      >
        <Icon icon="calendar" />
        {{
          modelValue
            ? df.format(modelValue.toDate(getLocalTimeZone()))
            : 'Pick a date'
        }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar
        v-model="modelValue"
        initial-focus
      />
    </PopoverContent>
  </Popover>
</template>
