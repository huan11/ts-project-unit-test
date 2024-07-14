module.exports = {
  preset: 'ts-jest', /* this fix the issue that cant run `yarn test` after install ts-jest and @types/jest */
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
};
