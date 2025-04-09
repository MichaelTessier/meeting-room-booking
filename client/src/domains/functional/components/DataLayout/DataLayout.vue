<script setup lang="ts" generic="T">
  interface Props {
    isFetching?: boolean
    error?: string
    data?: T
  }

  defineProps<Props>()
</script>

<template>
  <DataLayoutLoading
    v-if="isFetching"
    data-test="data-layout__loading"
  />

  <DataLayoutError
    v-else-if="error"
    data-test="data-layout__error"
  />

  <template v-else-if="data">
    <slot
      name="data"
      :data="data"
    />
  </template>
</template>
