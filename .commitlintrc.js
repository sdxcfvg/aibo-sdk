module.exports = {
  // https://github.com/conventional-changelog/commitlint/#what-is-commitlint
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'docs',
        'feat',
        'fix',
        'init',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}
