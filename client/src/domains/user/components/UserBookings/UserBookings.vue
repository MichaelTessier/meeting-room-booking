<script setup lang="ts">
  import { useUserStore } from '@/domains/user/stores/useUserStore'
  import type { Booking } from 'meeting-room-booking-types'

  const userStore = useUserStore()

  const { bookings } = storeToRefs(userStore)

  const isDialogOpen = ref(false)
  const selectedBooking = ref<Booking | null>(null)

  const onBookingClick = (booking: Booking) => {
    isDialogOpen.value = true
    selectedBooking.value = booking
  }
</script>

<template>
  <div
    data-test="user-bookings"
    class="flex flex-col gap-6"
  >
    <Heading class="text-center">{{ $t('user.bookings.title') }}</Heading>
    <div
      v-for="booking in bookings"
      :key="booking.id"
    >
      <BookingCard
        data-test="user-bookings__booking-card"
        :booking="booking"
        @click="onBookingClick(booking)"
      />
    </div>

    <BookingFormDialog
      v-if="selectedBooking"
      :key="selectedBooking.id"
      v-model:open="isDialogOpen"
      :booking="selectedBooking"
    />
  </div>
</template>
