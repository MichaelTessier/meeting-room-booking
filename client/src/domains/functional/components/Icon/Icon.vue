<script setup lang="ts">
  import { iconLucideMatcher, type IconName } from './Icon.model'

  interface Props {
    icon: IconName
  }

  const props = defineProps<Props>()

  const IconAsyncComponent = defineAsyncComponent({
    loader: async () => {
      return import('lucide-vue-next').then(
        (module) => module[iconLucideMatcher[props.icon]],
      ) as Promise<Component>
    },
  })
</script>

<template>
  <component
    :is="IconAsyncComponent"
    v-if="IconAsyncComponent"
  />
</template>
