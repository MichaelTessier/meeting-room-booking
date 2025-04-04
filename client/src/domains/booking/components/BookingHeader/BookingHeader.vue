<script setup lang="ts">
  const { t } = useI18n()

  const items = [
    {
      label: t('booking.header.menu.overview'),
      route: BOOKING_ROUTES.OVERVIEW,
    },
    {
      label: t('booking.header.menu.calendar'),
      route: BOOKING_ROUTES.CALENDAR,
    },
  ]
</script>

<template>
  <header
    class="flex items-center bg-white p-4 shadow dark:bg-gray-900 h-[100px]"
  >
    <Icon
      icon="circle-dot-dashed"
      class="mr-10"
      size="xx-large"
    />
    <menu>
      <ul class="flex gap-8">
        <li
          v-for="item in items"
          :key="item.label"
          class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <RouterLink :to="{ name: item.route }">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </menu>
  </header>
</template>
