<script setup lang="ts">
  import type { Booking } from 'meeting-room-booking-types'

  const props = defineProps<{
    booking: Booking
  }>()

  const emit = defineEmits<{
    submit: []
    delete: []
  }>()

  const bookingStore = useBookingStore()
  const userStore = useUserStore()

  const bookingRef = ref<Booking>(props.booking)

  const canCancel = computed(
    () => bookingRef.value.user.id === userStore.user?.id,
  )

  const onSubmit = (booking: Booking) => {
    bookingStore.updateBooking(booking)
    emit('submit')
  }

  const onDelete = () => {
    bookingStore.deleteBooking(bookingRef.value.id)
    emit('delete')
  }

  bookingStore.$onAction(({ name, after, args }) => {
    if (name === 'updateBooking') {
      userStore.updateUserBooking(args[0])

      after((result) => {
        if (!result) {
          userStore.removeLastUserBooking()
          return
        }
        userStore.updateUserBooking(result)
      })
    }

    if (name === 'deleteBooking') {
      userStore.removeUserBooking(args[0])

      after((result) => {
        if (!result) {
          userStore.removeLastUserBooking()
          return
        }
        userStore.updateUserBooking(bookingRef.value)
      })
    }
  })
</script>

<template>
  <Dialog>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ $t('booking.update.title') }}</DialogTitle>
      </DialogHeader>

      <BookingForm
        :booking="booking"
        :can-cancel="canCancel"
        @submit="onSubmit"
        @delete="onDelete"
      />
    </DialogContent>
  </Dialog>
</template>
