<script lang="ts" setup>
  const userStore = useUserStore()

  onBeforeMount(async () => {
    await userStore.fetchUser()
    await userStore.fetchUserBookings()
  })
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>
