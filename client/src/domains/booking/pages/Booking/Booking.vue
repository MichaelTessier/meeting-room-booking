<script setup lang="ts">
  const route = useRoute()

  const hasFilters = computed(() => {
    return route.meta?.hasDateFilter || route.meta?.hasTimeFilter
  })
</script>

<template>
  <section
    class="min-h-screen w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12"
  >
    <div class="col-span-1 md:col-span-6 lg:col-span-8 flex flex-col">
      <BookingHeader />

      <div class="flex flex-1 h-full">
        <BookingLayout>
          <div class="my-5">
            <BookingFilters v-if="hasFilters" />
          </div>

          <RouterView />
        </BookingLayout>
      </div>
    </div>
    <UserAside class="col-span-1 md:col-span-6 lg:col-span-4" />
  </section>
</template>
