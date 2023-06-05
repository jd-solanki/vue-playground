<script lang="ts" setup>
import { mergePropsDefaults } from '../../composables/useDefaults'
import { ANU_DEFAULTS } from '../../symbols'
import { aConfigProps } from './meta'

const props = defineProps(aConfigProps)
defineOptions({
  name: 'AConfig',
})

const defaults = inject(ANU_DEFAULTS)
watch(
  () => props.props,
  () => {
    provide(ANU_DEFAULTS, mergePropsDefaults(defaults, props.props))
  },
  { immediate: true },
)
</script>

<template>
  <slot />
</template>
