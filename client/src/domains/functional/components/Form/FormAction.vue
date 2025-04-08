<script setup lang="ts">
  defineProps<{
    submitLabel: string
    resetLabel?: string
  }>()
</script>

<template>
  <div class="flex flex-row gap-4 justify-end">
    <Button
      v-if="resetLabel"
      type="reset"
    >
      {{ resetLabel }}
    </Button>
    <Button type="submit">{{ submitLabel }}</Button>
  </div>
</template>
