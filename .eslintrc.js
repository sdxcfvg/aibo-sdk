/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // 允许使用 require()
  },
}
