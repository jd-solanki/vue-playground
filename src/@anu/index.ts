import { defu } from 'defu'
import type { PartialDeep, Simplify } from 'type-fest'
import type { App, StyleValue } from 'vue'

import * as components from './components'
import type { AAlertProps } from './components/alert'
import type { ABtnProps } from './components/btn'
import type { ACardProps } from './components/card'
import { ANU_DEFAULTS } from './symbols'

interface ComponentProps {
  AAlert: AAlertProps
  ABtn: ABtnProps
  ACard: ACardProps
}

export type PluginOptionDefaults = {
  [key in keyof ComponentProps]: Simplify<
    ComponentProps[key]
    & PluginOptionDefaults
    & {
      class: any
      style: StyleValue
      attrs: Record<string, unknown>
    }
  >
}

export interface PluginOptions {
  defaults: PartialDeep<PluginOptionDefaults>
}

const configDefaults: PluginOptions = {
  defaults: {},
}

export const plugin = {
  install(app: App, options: PartialDeep<PluginOptions> = {}) {
    const config = defu(options, configDefaults)

    for (const prop in components) {
      // @ts-expect-error: I want to index import using string
      const component = components[prop]
      app.component(component.name, component)
    }

    console.log('config.defaults :>> ', config.defaults)
    app.provide(ANU_DEFAULTS, config.defaults)
  },
}
