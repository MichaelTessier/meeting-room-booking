<template>
  <div
    v-if="avatarLetters"
    data-test="user-avatar"
    class="rounded-full bg-primary dark:text-muted flex items-center justify-center w-[40px] h-[40px]"
  >
    {{ avatarLetters }}
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore()

  const avatarLetters = computed(() => {
    if (!userStore.user?.name) return ''
    const [first, last] = userStore.user.name.split(' ')
    let output = ''
    if (first) {
      output += first.charAt(0)
    }

    if (last) {
      output += last.charAt(0)
    }

    return output.toUpperCase()
  })
</script>
