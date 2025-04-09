<script setup lang="ts">
  interface Props {
    title?: string
  }

  defineProps<Props>()
</script>

<template>
  <section class="flex w-full flex-col px-4">
    <Heading
      v-if="title"
      class="mb-9"
    >
      {{ title }}
    </Heading>

    <div class="pt-5 flex flex-col h-full">
      <slot />
    </div>
  </section>
</template>
