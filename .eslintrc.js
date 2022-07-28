/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-var-requires': 0 // 允许使用 require()
  }
}
