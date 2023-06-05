<script lang="ts" setup>
import { useDefaults } from '../../composables/useDefaults'
import { aAlertProps } from './meta'

const _props = defineProps(aAlertProps)

defineOptions({
  name: 'AAlert',
})

const { props, defaultsClass, defaultsStyle, defaultsAttrs } = useDefaults(_props)
</script>

<template>
  <div
    :class="defaultsClass"
    :style="defaultsStyle"
    v-bind="defaultsAttrs"
    class="a-alert p-4 text-sm bg-red-500 font-semibold text-white flex w-full rounded-lg items-center gap-x-3"
  >
    <slot />
  </div>
</template>
