<script setup lang="ts">
  import type { Booking } from 'meeting-room-booking-types'

  const props = defineProps<{
    booking: Booking
  }>()

  const emit = defineEmits(['submit'])

  const { t } = useI18n()
  const bookingStore = useBookingStore()
  const userStore = useUserStore()

  const bookingRef = ref<Booking>(props.booking)

  const onSubmit = (booking: Booking) => {
    bookingStore.updateBooking(booking)
    emit('submit')
  }

  bookingStore.$onAction(({ name, onError, args }) => {
    if (name === 'updateBooking') {
      userStore.updateUserBooking(args[0])
    }
    onError(() => {
      userStore.updateUserBooking(bookingRef.value)
    })
  })
</script>

<template>
  <Dialog>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ t('booking.update.title') }}</DialogTitle>
      </DialogHeader>

      <BookingForm
        :booking="booking"
        @submit="onSubmit"
      />
    </DialogContent>
  </Dialog>
</template>
