import { objectKeys, objectPick } from '@antfu/utils'
import { deepmergeCustom } from 'deepmerge-ts'
import type { Ref, StyleValue } from 'vue'
import type { PluginOptionDefaults } from '../index'
import { ANU_DEFAULTS } from '../symbols'

export const mergePropsDefaults = deepmergeCustom({
  mergeArrays: false,
})

interface ReturnType<Props> {
  props: Props

  defaultsClass: Ref<any>
  defaultsStyle: Ref<StyleValue | undefined>
  defaultsAttrs: Ref<Record<string, unknown> | undefined>
}

export function useDefaults<Props extends Record<string, unknown>>(definitionProps: Props, componentName?: keyof PluginOptionDefaults): ReturnType<Props> {
  const defaults = inject(ANU_DEFAULTS)

  const vm = getCurrentInstance()
  const _componentName = (componentName ?? vm?.type.name ?? vm?.type.__name) as keyof PluginOptionDefaults | undefined

  if (!defaults)
    throw new Error('Unable to find defaults. Please make sure to install the plugin before using `useDefaults` composable.')

  if (!_componentName)
    throw new Error('Unable to identify the component name. Please define component name or use the `componentName` parameter while using `useDefaults` composable.')

  const props = ref(definitionProps) as Ref<Props>
  const defaultsClass = ref() as ReturnType<Props>['defaultsClass']
  const defaultsStyle = ref() as ReturnType<Props>['defaultsStyle']
  const defaultsAttrs = ref({}) as ReturnType<Props>['defaultsAttrs']

  const subProps = ref({}) as Ref<any>
  const defaultsProps = ref({}) as Ref<any>

  const calculateDefaults = () => {
    console.warn('calculateDefaults called...')
    const { class: _class, style, attrs, ...restProps } = defaults.value[_componentName] || {}

    defaultsClass.value = _class
    defaultsStyle.value = style || ''
    defaultsAttrs.value = attrs || {}

    // console.log('restProps :>> ', restProps);

    const { componentProps, otherProps } = (() => {
      const componentProps = {} as any
      const otherProps = {} as any

      Object.entries(restProps)
        .forEach(([key, value]) => {
          if (key in definitionProps)
            componentProps[key] = value

          else
            otherProps[key] = value
        })

      return { componentProps, otherProps }
    })()

    defaultsProps.value = componentProps
    subProps.value = otherProps

    const explicitPropsNames = objectKeys(vm?.vnode.props || {}) as unknown as (keyof Props)[]
    const explicitProps = objectPick(definitionProps, explicitPropsNames)

    props.value = mergePropsDefaults(definitionProps, defaultsProps.value, explicitProps) as Props

    // Provide subProps to the nested component
    // provide(ANU_DEFAULTS, mergePropsDefaults(defaults, subProps))
  }

  watch(
    // ℹ️ Watching for defaults here and we are also updating the defaults in `subProps` watcher that makes infinite loop
    [() => definitionProps, defaults],
    () => {
      calculateDefaults()
    },
    { deep: true, immediate: true },
  )

  watch(
    subProps,
    (val) => {
      // ℹ️ This modifies the root defaults object hence also update the parent components with new defaults
      //                                  |
      defaults.value = mergePropsDefaults(defaults.value, val)
    },
    { immediate: true, deep: true },
  )

  return {
    props: toReactive(props),
    defaultsClass,
    defaultsStyle,
    defaultsAttrs,
  }
}
