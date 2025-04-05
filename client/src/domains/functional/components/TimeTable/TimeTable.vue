<script setup lang="ts">
  import {
    TimeTable,
    type TimeTableItem,
    type TimeTableLocation,
  } from 'vue3-timetable'

  defineProps<{
    items: TimeTableItem[]
    locations: TimeTableItem[]
  }>()

  const itemsData: TimeTableItem[] = [
    {
      id: 'e3',
      locationId: 1,
      startDate: `2024-07-09T14:00:00`,
      endDate: `2024-07-09T16:00:00`,
      name: 'Surprise Event',
    },
  ]

  const locationsData: TimeTableLocation[] = [
    {
      id: 1,
      name: 'Mainstage',
      items: [
        {
          id: 'e1',
          startDate: `2024-07-09T08:00:00`,
          endDate: `2024-07-09T11:00:00`,
          name: 'Main Event',
          info: "Don't miss it!",
          style: {
            backgroundColor: '#999',
            color: '#000',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Playground',
      items: [
        {
          id: 'er',
          startDate: `2024-07-09T12:00:00`,
          endDate: `2024-07-09T17:00:00`,
          name: 'Fun Time',
          cancelled: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Playground',
      items: [
        {
          id: 'e2r',
          startDate: `2024-07-09T12:00:00`,
          endDate: `2024-07-09T17:00:00`,
          name: 'Fun Time',
          cancelled: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Playground',
      items: [
        {
          id: 'e2f',
          startDate: `2024-07-09T12:00:00`,
          endDate: `2024-07-09T17:00:00`,
          name: 'Fun Time',
          cancelled: true,
        },
      ],
    },
    {
      id: 5,
      name: 'Playground',
      items: [
        {
          id: 'e2v',
          startDate: `2024-07-09T12:00:00`,
          endDate: `2024-07-09T17:00:00`,
          name: 'Fun Time',
          cancelled: true,
        },
      ],
    },
  ]
</script>

<template>
  <div class="timetable h-full rounded-xl overflow-hidden">
    <TimeTable
      variant="vertical"
      :styles="{
        backgroundColor: '#111827',
        dateBackgroundColor: 'transparent',
        borderStyle: '1px solid #374151',
      }"
      :show-time-marker="false"
      :items="itemsData"
      :locations="locationsData"
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
