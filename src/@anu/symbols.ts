import type { InjectionKey } from 'vue'
import type { PluginOptions } from './index'

export const ANU_DEFAULTS = Symbol('ANU_DEFAULTS') as InjectionKey<
    Ref<PluginOptions['defaults']>
>
