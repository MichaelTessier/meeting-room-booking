<script setup lang="ts">
  interface Props {
    title: string
  }



  defineProps<Props>()
</script>

<template>
  <section class="flex w-full flex-col">
    <Heading class="mb-4">{{ title }}</Heading>

    <slot />
  </section>
</template>
