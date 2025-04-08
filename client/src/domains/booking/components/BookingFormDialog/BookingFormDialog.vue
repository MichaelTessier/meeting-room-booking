<script setup lang="ts">
  import type { BookingUpdate } from 'meeting-room-booking-types'

  const props = defineProps<{
    booking: BookingUpdate
  }>()

  const dialog = useTemplateRef('dialog')

  const emit = defineEmits(['submit'])

  const { t } = useI18n()
  const bookingStore = useBookingStore()
  const userStore = useUserStore()

  const bookingRef = ref<BookingUpdate>(props?.booking)

  const state = reactive({
    title: props.booking.title,
    description: props.booking.description,
    dateStart: props.booking.dateStart,
    dateEnd: props.booking.dateEnd,
    user: props.booking.user,
    room: props.booking.room,
    id: props.booking.id,
  })

  const onSubmit = () => {
    bookingStore.updateBooking(state)
    emit('submit')
  }

  bookingStore.$onAction(({ name, onError }) => {
    if (name === 'updateBooking') {
      userStore.updateUserBooking(state)
    }

    onError(() => {
      userStore.updateUserBooking(bookingRef.value)
    })
  })
</script>

<template>
  <Dialog ref="dialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ t('booking.dialog.title.edit') }}</DialogTitle>
      </DialogHeader>

      <form
        class="flex flex-col gap-8"
        @submit.prevent="onSubmit"
      >
        <FormControl
          :label="t('booking.form.title')"
          :label-for="'title'"
        >
          <Input
            id="title"
            v-model="state.title"
            type="text"
            required
          />
        </FormControl>
        <FormControl
          :label="t('booking.form.description')"
          :label-for="'description'"
        >
          <Textarea
            id="description"
            v-model="state.description"
            rows="5"
            required
          />
        </FormControl>

        <FormControl
          :label="t('booking.form.dateStart')"
          :label-for="'dateStart'"
        >
          <DateTimePicker v-model:date="state.dateStart" />
        </FormControl>

        <FormControl
          :label="t('booking.form.dateEnd')"
          :label-for="'dateEnd'"
        >
          <DateTimePicker
            v-model:date="state.dateEnd"
            min-value=""
          />
        </FormControl>

        <FormAction
          :submit-label="t('booking.form.submit')"
          :reset-label="t('booking.form.reset')"
        />
      </form>
    </DialogContent>
  </Dialog>
</template>
