<script setup lang="ts">
  import { iconLucideMatcher, type IconName, type IconSize } from './Icon.model'

  interface Props {
    icon: IconName
    size?: IconSize
  }

  const props = withDefaults(defineProps<Props>(), {
    size: ICON_SIZE.MEDIUM,
  })

  const IconAsyncComponent = defineAsyncComponent({
    loader: async () => {
      return import('lucide-vue-next').then(
        (module) => module[iconLucideMatcher[props.icon]],
      ) as Promise<Component>
    },
  })

  const sizeMatcher = {
    [ICON_SIZE.SMALL]: '16',
    [ICON_SIZE.MEDIUM]: '24',
    [ICON_SIZE.LARGE]: '32',
    [ICON_SIZE.X_LARGE]: '48',
    [ICON_SIZE.XX_LARGE]: '64',
  }
</script>

<template>
  <component
    :is="IconAsyncComponent"
    v-if="IconAsyncComponent"
    stroke-width="{1}"
    :size="sizeMatcher[props.size]"
  />
</template>
