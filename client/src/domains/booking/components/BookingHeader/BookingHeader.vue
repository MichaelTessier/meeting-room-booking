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
    class="flex items-center bg-background p-4 shadow dark:bg-muted h-[100px] sticky top-0"
  >
    <div class="text-primary">
      <Icon
        icon="circle-dot-dashed"
        class="mr-6"
        size="xx-large"
      />
    </div>
    <menu>
      <ul class="flex gap-8">
        <li
          v-for="item in items"
          :key="item.label"
        >
          <!-- class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" -->
          <RouterLink :to="{ name: item.route }">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </menu>
  </header>
</template>
