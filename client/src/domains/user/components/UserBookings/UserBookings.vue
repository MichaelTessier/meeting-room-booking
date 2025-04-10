<script setup lang="ts">
  import { useUserStore } from '@/domains/user/stores/useUserStore'
  import type { Booking } from 'meeting-room-booking-types'

  const userStore = useUserStore()

  const { sortedBookings } = storeToRefs(userStore)

  const isDialogOpen = ref(false)
  const selectedBooking = ref<Booking | null>(null)

  const onBookingClick = (booking: Booking) => {
    isDialogOpen.value = true
    selectedBooking.value = booking
  }

  const closeDialog = () => {
    isDialogOpen.value = false
    selectedBooking.value = null
  }
</script>

<template>
  <div
    data-test="user-bookings"
    class="flex flex-col gap-6 h-full"
  >
    <Heading class="text-center">{{ $t('user.bookings.title') }}</Heading>

    <div class="flex flex-col gap-6 h-full overflow-y-auto pb-[80px]">
      <div v-if="!sortedBookings.length">
        <Text class="text-center">
          {{ $t('user.bookings.empty') }}
        </Text>
      </div>
      <div
        v-for="booking in sortedBookings"
        v-else
        :key="booking.id"
      >
        <BookingCard
          data-test="user-bookings__booking-card"
          :booking="booking"
          @click="onBookingClick(booking)"
        />
      </div>
    </div>

    <BookingUpdateDialog
      v-if="selectedBooking"
      :key="selectedBooking.id"
      v-model:open="isDialogOpen"
      :booking="selectedBooking"
      @submit="closeDialog"
      @delete="closeDialog"
    />
  </div>
</template>
