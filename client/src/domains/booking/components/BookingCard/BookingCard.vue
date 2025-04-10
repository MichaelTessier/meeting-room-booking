<script setup lang="ts">
  import type { Booking } from 'meeting-room-booking-types'

  defineProps<{
    booking: Booking
  }>()
</script>

<template>
  <div
    data-test="booking-card"
    class="grid grid-cols-3 w-full h-[150px] rounded border border-border p-4 transition hover:shadow-lg dark:bg-muted dark:hover:shadow-lg cursor-pointer"
  >
    <div
      class="col-span-1 flex flex-col justify-between items-stretch border-r pr-4 mr-4"
    >
      <Heading
        v-if="booking.room?.name"
        type="heading-small"
        data-test="booking-card__room-name"
      >
        {{ booking.room.name }}
      </Heading>

      <div
        v-if="booking.isPending"
        class="flex items-center gap-2"
      >
        <Icon
          icon="calendar"
          size="small"
        />
        <Text type="x-small">{{ $t('booking.card.pending') }} </Text>
      </div>
    </div>

    <div class="col-span-2 flex flex-col justify-between">
      <Text
        v-if="booking.title"
        data-test="booking-card__title"
        class="mt-1"
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
          {{ $d(new Date(booking.dateStart), 'short') }} -
          {{ $d(new Date(booking.dateEnd), 'short') }}
        </Text>

        <Icon
          icon="edit"
          size="small"
        />
      </div>
    </div>
  </div>
</template>
