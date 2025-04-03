<script setup lang="ts">
  import type { Room } from 'meeting-room-booking-types'

  const { t } = useI18n()

  const props = defineProps<{
    room: Room
  }>()

  const router = useRouter()

  const onClick = () => {
    router.push({ name: 'room', params: { slug: props.room.slug } })
  }
</script>

<template>
  <article
    data-test="room-card"
    @click="onClick"
  >
    <img
      v-if="room.image"
      data-test="room-card__image"
      :src="room.image"
      :alt="room.name"
      class="w-full h-64 object-cover object-center"
    />
    <div class="flex flex-row items-center justify-between">
      <div class="py-4">
        <Heading
          v-if="room.name"
          class="pb-6"
          data-test="room-card__name"
        >
          {{ room.name }}
        </Heading>
        <p
          v-if="room.capacity"
          data-test="room-card__capacity"
        >
          {{ t('booking.room.card.capacity') }} {{ room.capacity }}
        </p>
      </div>
      <Icon
        icon="plus"
        size="x-large"
      />
    </div>
  </article>
</template>
