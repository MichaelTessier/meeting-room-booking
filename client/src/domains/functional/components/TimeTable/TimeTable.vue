<script setup lang="ts">
  import { TimeTable as VueTimeTable, type TimeTableItem } from 'vue3-timetable'

  defineProps<{
    items: TimeTableItem[]
    locations: TimeTableItem[]
    date: string
  }>()
</script>

<template>
  <div class="timetable h-full rounded-xl overflow-hidden">
    <VueTimeTable
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
  .ftr-timetable-datetime__select {
    display: none !important;
  }

  .ftr-timetable-location {
    height: 91px !important;
    background: #0a101c;
  }
  .ftr-timetable-location__name {
    text-align: center;
    font-size: 30px;
    height: 100px;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .ftr-timetable-datetime__container {
    background: #0a101c !important;
  }
</style>
