<script setup lang="ts">
  // PSEUDO dark mode
  // TODO: save data to local storage
  const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

  const icon = computed(() => {
    return isDark.value ? 'sun' : 'moon'
  })

  watch(
    () => isDark.value,
    (newValue) => {
      const html = document.querySelector('html')
      if (html) {
        if (newValue) {
          html.classList.add('dark')
        } else {
          html.classList.remove('dark')
        }
      }
    },
    { immediate: true },
  )
</script>

<template>
  <Icon
    :key="icon"
    :icon="icon"
    class="cursor-pointer"
    @click="isDark = !isDark"
  />
</template>
