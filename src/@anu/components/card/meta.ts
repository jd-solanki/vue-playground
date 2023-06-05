import type { ExtractPublicPropTypes } from 'vue'

export const aCardProps = {
  title: {
    type: String,
    default: 'Default Title',
  },
}
export type ACardProps = ExtractPublicPropTypes<typeof aCardProps>
