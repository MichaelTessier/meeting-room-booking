<script setup lang="ts">
  import type { Booking, Room } from 'meeting-room-booking-types'

  const props = defineProps<{
    room: Room
  }>()

  const emit = defineEmits(['submit'])

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

  bookingStore.$onAction(({ name, after, args }) => {
    if (name === 'createBooking') {
      userStore.addUserBooking(args[0])

      after((result) => {
        if (!result) {
          userStore.removeLastUserBooking()
          return
        }

        userStore.updateUserBooking(result)
      })
    }
  })
</script>

<template>
  <Dialog>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {{ $t('booking.create.title', { room: room.name }) }}
        </DialogTitle>
      </DialogHeader>

      <BookingForm @submit="onSubmit" />
    </DialogContent>
  </Dialog>
</template>
