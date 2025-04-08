<script setup lang="ts">
  import { cn } from '@/lib/shadcn/utils'
  import { buttonVariants } from '@/lib/shadcn/ui/button'
  import { AlertDialogAction, type AlertDialogActionProps } from 'reka-ui'
  import { computed, type HTMLAttributes } from 'vue'

  const props = defineProps<
    AlertDialogActionProps & { class?: HTMLAttributes['class'] }
  >()

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
  })
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="cn(buttonVariants(), props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
