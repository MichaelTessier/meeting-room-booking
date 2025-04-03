<script lang="ts" setup>
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
      'text-xl': type === TEXT_TYPE.SMALL,
      'text-2xl': type === TEXT_TYPE.MEDIUM,
      'text-3xl': type === TEXT_TYPE.LARGE,
      'text-4xl': type === TEXT_TYPE.X_LARGE,
      'text-5xl': type === TEXT_TYPE.XX_LARGE,
    }"
  >
    <slot />
  </component>
</template>
