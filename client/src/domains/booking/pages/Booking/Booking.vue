<template>
  <section
    class="min-h-screen w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12"
  >
    <div class="col-span-1 md:col-span-6 lg:col-span-8">
      <BookingHeader />

      <div class="flex flex-1 m-4">
        <RouterView />
      </div>
    </div>
    <UserAside class="col-span-1 md:col-span-6 lg:col-span-4" />
  </section>
</template>
