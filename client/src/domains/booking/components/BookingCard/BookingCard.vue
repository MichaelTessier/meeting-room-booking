<script setup lang="ts">
  import type { Booking } from 'meeting-room-booking-types'

  defineProps<{
    booking: Booking
  }>()

  const { d } = useI18n()
</script>

<template>
  <div
    data-test="booking-card"
    class="grid grid-cols-3 w-full h-[150px] rounded border border-border p-4 transition hover:shadow-lg dark:bg-muted dark:hover:shadow-lg cursor-pointer"
  >
    <div class="col-span-1 flex justify-left border-r pr-4 mr-4">
      <Heading
        v-if="booking.room?.name"
        data-test="booking-card__room-name"
      >
        {{ booking.room.name }}
      </Heading>
    </div>

    <div class="col-span-2 flex flex-col justify-between">
      <Text
        v-if="booking.title"
        data-test="booking-card__title"
        type="large"
      >
        {{ booking.title }}
      </Text>

      <div class="flex items-center justify-between">
        <Text
          v-if="booking.dateStart && booking.dateEnd"
          type="x-small"
          data-test="booking-card__date"
        >
          {{ d(booking.dateStart, 'day') }} -
          {{ d(booking.dateEnd, 'day') }}
        </Text>

        <Icon icon="edit" />
      </div>
    </div>
  </div>
</template>
