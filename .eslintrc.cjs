/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@antfu',
    '@vue/eslint-config-typescript',
    // 'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Vue
    'vue/require-default-prop': 'off',
    'vue/no-restricted-class': ['error', '/^(p|m)(l|r)-/', '/^font-(100|200|700|800|900|bold|black)$/'],
    'vue/no-required-prop-with-default': 'error',
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    'vue/require-name-property': 'error',
    'vue/component-definition-name-casing': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['vue', 'tsx'],
    }],
  },
}
