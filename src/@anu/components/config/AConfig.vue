<script lang="ts" setup>
import { mergePropsDefaults } from '../../composables/useDefaults'
import { ANU_DEFAULTS } from '../../symbols'
import { aConfigProps } from './meta'

const props = defineProps(aConfigProps)
defineOptions({
  name: 'AConfig',
})

const defaults = inject(ANU_DEFAULTS)

if (!defaults)
  throw new Error('Unable to find defaults. Please make sure to install the plugin before using `useDefaults` composable.')

watch(
  () => props.props,
  () => {
    defaults.value = mergePropsDefaults(defaults.value, props.props)
  },
  { immediate: true },
)
</script>

<template>
  <slot />
</template>
