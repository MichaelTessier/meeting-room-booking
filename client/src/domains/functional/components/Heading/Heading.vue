<script lang="ts" setup>
  interface Props {
    type?: HeadingType
    tag?: HeadingTag
  }

  withDefaults(defineProps<Props>(), {
    type: HEADING_TYPE.HEADING_MEDIUM,
    tag: HEADING_TAG.H1,
  })
</script>

<template>
  <component
    :is="tag"
    class="font-bold"
    :class="{
      'text-xl': type === HEADING_TYPE.HEADING_SMALL,
      'text-2xl': type === HEADING_TYPE.HEADING_MEDIUM,
      'text-3xl': type === HEADING_TYPE.HEADING_LARGE,
      'text-4xl': type === HEADING_TYPE.HEADING_X_LARGE,
      'text-5xl': type === HEADING_TYPE.HEADING_XX_LARGE,
    }"
  >
    <slot />
  </component>
</template>
