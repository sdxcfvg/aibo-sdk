/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // test js/jsx/ts/tsx
  testRegex: '\\.test\\.(js|jsx|ts|tsx)$',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/*.ts', 'src/*.js'],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100
  //   }
  // },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  },
  modulePathIgnorePatterns: ['dist', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']
}
