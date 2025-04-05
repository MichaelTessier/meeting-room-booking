<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  defineProps<{
    room: Room
  }>()

  const { t } = useI18n()
</script>

<template>
  <div>
    <img
      v-if="room.image"
      data-test="room-detail__image"
      :src="room.image"
      :alt="room.name"
      class="w-full h-[32rem] object-cover object-center"
    />
    <div class="flex gap-4">
      <div
        class="min-w-[20rem] flex flex-col items-start justify-center gap-4 p-4"
      >
        <Heading
          v-if="room.name"
          class="py-4"
          data-test="room-detail__name"
          type="heading-xx-large"
        >
          {{ room.name }}
        </Heading>
        <p
          v-if="room.capacity"
          data-test="room-detail__capacity"
        >
          <Text data-test="room-detail__capacity-label">
            {{ t('booking.room.capacity') }}&nbsp;
          </Text>
          <Text
            data-test="room-detail__capacity-info"
            type="large"
          >
            {{
              t('booking.room.capacityInfo', {
                capacity: room.capacity,
              })
            }}
          </Text>
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 w-full">
        <EquipmentGrid
          v-if="room.equipments"
          class="my-8"
          :equipments="room.equipments"
        />
        <Button
          class="w-full"
          variant="outline"
          size="lg"
        >
          {{ t('booking.room.book') }}
        </Button>
      </div>
    </div>
  </div>
</template>
