<script setup lang="ts">
  defineProps<{
    submitLabel: string
    resetLabel?: string
  }>()
</script>

<template>
  <div class="flex flex-row gap-4 justify-end">
    <slot />
    <Button
      v-if="resetLabel"
      type="reset"
      variant="outline"
    >
      {{ resetLabel }}
    </Button>
    <Button type="submit">{{ submitLabel }}</Button>
  </div>
</template>
