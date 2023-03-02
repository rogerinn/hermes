/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['<rootDir>/src/**/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};