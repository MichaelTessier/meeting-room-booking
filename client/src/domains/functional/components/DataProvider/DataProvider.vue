<script setup lang="ts">
  import { useFetch } from '@vueuse/core'

  interface Props {
    url: string
  }

  const props = defineProps<Props>()

  const { isFetching, error, data } = await useFetch(props.url).get().json()
</script>

<template>
  <DataProviderLoading
    v-if="isFetching"
    data-test="data-provider__loading"
  />

  <DataProviderError
    v-else-if="error"
    data-test="data-provider__error"
  />

  <template v-else-if="data">
    <slot
      name="data"
      :data="data"
    />
  </template>
</template>
