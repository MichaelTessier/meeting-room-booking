<script setup lang="ts">
  defineProps<{
    isAvailable: boolean
  }>()

  const { t } = useI18n()
</script>

<template>
  <Badge
    class="flex items-center gap-2"
    variant="outline"
  >
    <p
      :class="{
        'text-red-700': !isAvailable,
        'text-green-700': isAvailable,
      }"
    >
      <Icon icon="circle-small" />
    </p>
    <Text
      data-test="room-detail__availability"
      type="large"
      class="mr-2"
    >
      {{
        isAvailable
          ? t('booking.room.available')
          : t('booking.room.unavailable')
      }}
    </Text>
  </Badge>
</template>
