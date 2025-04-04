<script setup lang="ts">
  import { useUserStore } from '@/domains/user/stores/useUserStore'

  const userStore = useUserStore()
</script>

<template>
  <div
    data-test="user-bookings"
    class="flex flex-col gap-6"
  >
    <div
      v-for="booking in userStore.bookings"
      :key="booking.id"
    >
      <BookingCard
        data-test="user-bookings__booking-card"
        :booking="booking"
      />
    </div>
  </div>
</template>
