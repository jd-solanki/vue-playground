import type { ExtractPublicPropTypes } from 'vue'

export const aBtnProps = {
  icon: String,
}
export type ABtnProps = ExtractPublicPropTypes<typeof aBtnProps>
