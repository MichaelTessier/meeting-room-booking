<script setup lang="ts">
  defineProps<{
    label: string
    labelFor?: string
  }>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <Label :for="labelFor">
      {{ label }}
    </Label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
