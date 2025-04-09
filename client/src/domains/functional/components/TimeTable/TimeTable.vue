<script setup lang="ts">
  import { TimeTable as VueTimeTable, type TimeTableItem } from 'vue3-timetable'

  interface Props {
    locations: TimeTableItem[]
    date?: string
  }

  const props = defineProps<Props>()

  const date = computed(() => {
    const date = props.date ? new Date(props.date) : new Date()

    // format to YYYY-MM-DD, little hacky but native
    return date.toLocaleDateString('fr-CA')
  })

  const emit = defineEmits<{
    'item-click': [TimeTableItem]
    'location-click': [TimeTableItem]
  }>()

  const id = ref(new Date().getTime())

  watch(
    () => props.locations,
    () => {
      id.value = new Date().getTime()
    },
  )
</script>

<template>
  <div class="timetable h-full rounded-xl overflow-hidden">
    <!-- KEY UGLY but maybe this component is not really reactive -->
    <VueTimeTable
      :key="date && id"
      variant="vertical"
      :dates="[date]"
      :starting-hour="6"
      :number-of-hours="17"
      :show-time-marker="false"
      :locations="locations"
      @item-click="(item) => emit('item-click', item)"
      @location-click="(item) => emit('location-click', item)"
    />
  </div>
</template>

<style>
  .ftr-timetable {
    --custom-border-style: 1px solid hsl(var(--border)) !important;
    --custom-background-color: hsl(var(--muted)) !important;
    --custom-text-color: hsl(var(--sidebar-foreground)) !important;
    --date-background-color: hsl(var(--muted)) !important;
    --datepicker-background-color: hsl(var(--muted)) !important;
    --scroll-color: hsl(var(--border)) !important;
  }

  .ftr-timetable-datetime__select {
    display: none !important;
  }

  .ftr-timetable-location {
    cursor: pointer !important;
  }

  .ftr-timetable-location,
  .ftr-timetable-datetime__date {
    height: 100px !important;
  }

  .ftr-timetable-location__name {
    text-align: center;
    font-size: 22px;
    height: 110px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    line-height: 1.2em;
    font-weight: 200;
  }
</style>
