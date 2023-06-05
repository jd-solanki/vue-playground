<script lang="ts" setup>
import { useDefaults } from '../../composables/useDefaults'
import { aBtnProps } from './meta'

const _props = defineProps(aBtnProps)

defineOptions({
  name: 'ABtn',
})

const { props, defaultsClass, defaultsStyle, defaultsAttrs } = useDefaults(_props)
</script>

<template>
  <div
    :class="defaultsClass"
    :style="defaultsStyle"
    v-bind="defaultsAttrs"
    class="a-btn px-4 py-2 bg-blue-500 text-white inline-flex rounded-lg items-center gap-x-2"
  >
    <i v-if="props.icon" :class="props.icon" />
    <slot />
  </div>
</template>
