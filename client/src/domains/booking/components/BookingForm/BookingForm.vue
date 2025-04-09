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
    dateStart: props.booking?.dateStart ?? new Date().toISOString(),
    dateEnd: props.booking?.dateEnd ?? addHours(new Date()).toISOString(),
    user: props.booking?.user,
    room: props.booking?.room,
    id: props.booking?.id,
  })

  const onSubmit = () => {
    // TODO: validate form
    emit('submit', state as Booking)
  }
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
      <DateTimePicker
        v-model:date="state.dateEnd"
        min-value=""
      />
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
