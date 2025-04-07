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
</script>

<template>
  <div class="timetable h-full rounded-xl overflow-hidden">
    <VueTimeTable
      :key="date"
      variant="vertical"
      :styles="{
        backgroundColor: '#111827',
        dateBackgroundColor: 'transparent',
        borderStyle: '1px solid #374151',
      }"
      :dates="[date]"
      :starting-hour="6"
      :number-of-hours="17"
      :show-time-marker="false"
      :locations="locations"
      @item-click="(item) => console.log(item)"
      @location-click="(location) => console.log(location)"
    />
  </div>
</template>

<style>
  .ftr-timetable {
    --custom-border-style: 1px solid #dadada !important;
    --custom-background-color: #e1e8f0 !important;
    --custom-text-color: #020203 !important;
  }

  .dark .ftr-timetable {
    --custom-border-style: 1px solid #03060a !important;
    --custom-background-color: #0a101c !important;
    --custom-text-color: #e1e8f0 !important;
  }

  .ftr-timetable-datetime__select {
    display: none !important;
  }

  .ftr-timetable-location,
  .ftr-timetable-datetime__date {
    height: 100px !important;
    background-color: var(--custom-background-color) !important;
  }

  .ftr-timetable-location__name {
    text-align: center;
    font-size: 30px;
    height: 110px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    line-height: 1.2em;
    font-weight: 200;
  }
</style>
