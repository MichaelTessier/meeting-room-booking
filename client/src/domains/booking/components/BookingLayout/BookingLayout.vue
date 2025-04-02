<script setup lang="ts">
  interface Props {
    title?: string
  }

  defineProps<Props>()
</script>

<template>
  <section class="flex w-full flex-col">
    <Heading
      v-if="title"
      class="mb-9"
    >
      {{ title }}
    </Heading>

    <slot />
  </section>
</template>
