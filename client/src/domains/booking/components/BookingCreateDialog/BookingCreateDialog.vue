<script setup lang="ts">
  import type { Booking, Room } from 'meeting-room-booking-types'

  const props = defineProps<{
    room: Room
  }>()

  const emit = defineEmits(['submit'])

  const { t } = useI18n()
  const bookingStore = useBookingStore()
  const userStore = useUserStore()

  const onSubmit = (booking: Booking) => {
    if (!userStore.user) {
      return
    }

    bookingStore.createBooking({
      ...booking,
      room: props.room,
      user: userStore.user,
    })
    emit('submit')
  }

  bookingStore.$onAction(({ name, after, args, store }) => {
    if (name === 'createBooking') {
      userStore.addUserBooking(args[0])

      after((result) => {
        if (!result) {
          userStore.removeLastUserBooking()
          return
        }

        bookingStore.removeLastUserBooking()
        userStore.removeLastUserBooking()

        const bookings = store.bookings

        bookingStore.$patch({ bookings: [...bookings, result] })
        userStore.addUserBooking(result)
      })
    }
  })
</script>

<template>
  <Dialog>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {{ t('booking.create.title', { room: room.name }) }}
        </DialogTitle>
      </DialogHeader>

      <BookingForm @submit="onSubmit" />
    </DialogContent>
  </Dialog>
</template>
