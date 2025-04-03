<script setup lang="ts">
  import { EquipmentType } from 'meeting-room-booking-types'
  import type { EquipmentTypeEnum, Equipment } from 'meeting-room-booking-types'

  const props = defineProps<{
    equipment: Equipment
  }>()

  const iconMatcher: Record<EquipmentTypeEnum[number], IconName> = {
    [EquipmentType.TELEVISION]: ICON_NAME.TV_MINIMAL,
    [EquipmentType.PROJECTOR]: ICON_NAME.PROJECTOR,
  }

  const icon = computed(() => {
    return props.equipment.type && iconMatcher[props.equipment.type]
  })
</script>

<template>
  <div
    data-test="equipment"
    class="flex flex-col items-center justify-center gap-2"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      :size="ICON_SIZE.XX_LARGE"
      data-test="equipment__icon"
    />
    <p data-test="equipment__name">{{ equipment.name }}</p>
  </div>
</template>
