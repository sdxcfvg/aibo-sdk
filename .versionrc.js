/**
 * @type {import('standard-version').Options}
 */
module.exports = {
  header: '# Changelog',
  commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
  types: [
    { type: 'feat', section: '✨ Features' },
    { type: 'fix', section: '🐛 Bug Fixes' },
    { type: 'docs', section: '✏️ Documentation' },
    { type: 'init', section: '🎉 Init' },
    { type: 'perf', section: '⚡ Performance Improvements' },
    { type: 'revert', section: '⏪ Revert' },
    { type: 'style', section: '💄 Styles', hidden: true },
    { type: 'refactor', section: '♻️ Code Refactoring', hidden: true },
    { type: 'test', section: '✅ Tests', hidden: true },
    { type: 'build', section: '📦‍ Build System', hidden: true },
    { type: 'chore', section: '🚀 Chore', hidden: true },
    { type: 'ci', section: '👷 Continuous Integration', hidden: true }
  ]
  // skip: {}
}
