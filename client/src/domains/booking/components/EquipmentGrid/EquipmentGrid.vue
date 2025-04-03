<script setup lang="ts">
  import type { Equipment } from 'meeting-room-booking-types'

  defineProps<{
    equipments: Equipment[]
  }>()
</script>

<template>
  <ul
    data-test="equipment-grid"
    class="flex flex-wrap gap-4 justify-center items-center"
  >
    <li
      v-for="equipment in equipments"
      :key="equipment.id"
    >
      <Equipment :equipment="equipment" />
    </li>
  </ul>
</template>
