<script setup lang="ts">
  import type { Booking } from 'meeting-room-booking-types'

  const props = defineProps<{
    booking?: Partial<Booking>
    canCancel?: boolean
  }>()

  const emit = defineEmits<{
    submit: [booking: Booking]
    delete: []
  }>()

  const { t } = useI18n()

  const state = reactive<Partial<Booking>>({
    title: props.booking?.title ?? '',
    description: props.booking?.description ?? '',
    dateStart: props.booking?.dateStart ?? roundedDate(new Date()),
    dateEnd: props.booking?.dateEnd ?? roundedDate(addHours(new Date())),
    user: props.booking?.user,
    room: props.booking?.room,
    id: props.booking?.id,
  })

  const onSubmit = () => {
    // TODO: validate form
    emit('submit', state as Booking)
  }

  watch(
    () => [state.dateStart, state.dateEnd],
    () => {
      if (state.dateStart && state.dateEnd) {
        const start = new Date(state.dateStart)
        const end = new Date(state.dateEnd)

        if (start >= end) {
          state.dateEnd = roundedDate(addHours(start))
        }
      }
    },
  )
</script>

<template>
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
      <DateTimePicker v-model:date="state.dateEnd" />
    </FormControl>

    <FormAction
      :submit-label="t('booking.form.submit')"
      :reset-label="t('booking.form.reset')"
    >
      <Button
        v-if="canCancel"
        type="button"
        variant="destructive"
        @click="$emit('delete')"
      >
        {{ t('booking.form.cancel') }}
      </Button>
    </FormAction>
  </form>
</template>
