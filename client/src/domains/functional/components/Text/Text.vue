<script lang="ts" setup>
  import { TEXT_TYPE } from '@/domains/functional/components/Text/Text.model'

  interface Props {
    type?: TextType
    tag?: string
  }

  withDefaults(defineProps<Props>(), {
    type: TEXT_TYPE.MEDIUM,
    tag: 'p',
  })
</script>

<template>
  <component
    :is="tag"
    :class="{
      'text-xs': type === TEXT_TYPE.X_SMALL,
      'text-sm': type === TEXT_TYPE.SMALL,
      'text-base': type === TEXT_TYPE.MEDIUM,
      'text-1xl': type === TEXT_TYPE.LARGE,
      'text-3xl': type === TEXT_TYPE.X_LARGE,
      'text-5xl': type === TEXT_TYPE.XX_LARGE,
    }"
  >
    <slot />
  </component>
</template>
