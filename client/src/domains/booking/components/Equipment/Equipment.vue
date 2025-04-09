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
  <Card
    data-test="equipment"
    class="flex flex-col items-center justify-center gap-2 p-5"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      size="xx-large"
      data-test="equipment__icon"
    />
    <div class="h-[1px] w-full bg-border"></div>
    <p data-test="equipment__name">{{ equipment.name }}</p>
  </Card>
</template>
