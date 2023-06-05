<script lang="ts" setup>
import { useDefaults } from '../../composables/useDefaults'
import { aCardProps } from './meta'

const _props = defineProps(aCardProps)

defineOptions({
  name: 'ACard',
})

const { props, defaultsClass, defaultsStyle, defaultsAttrs } = useDefaults(_props)
</script>

<template>
  <div
    :class="defaultsClass"
    :style="defaultsStyle"
    v-bind="defaultsAttrs"
    class="a-card p-4 rounded-lg bg-white shadow"
  >
    <header v-if="props.title" class="mb-3 text-xl text-gray-600 font-medium">
      {{ props.title }}
    </header>
    <div class="a-card-content flex items-start flex-col gap-y-3">
      <slot />
    </div>
  </div>
</template>
