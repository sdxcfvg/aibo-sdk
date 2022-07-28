/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['lib', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
