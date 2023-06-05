import type { ExtractPublicPropTypes } from 'vue'
import type { PluginOptions } from '../../index'

// ℹ️ Make sure to checkout meta definition rules

// 👉 Props
export const aConfigProps = {
  props: {
    type: Object as PropType<PluginOptions['defaults']>,
    default: {},
  },
} as const

export type AConfigProps = ExtractPublicPropTypes<typeof aConfigProps>
