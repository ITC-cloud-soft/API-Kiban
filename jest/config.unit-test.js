const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, '..'),
  modulePaths: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/src', '<rootDir>/jest'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/design/components/$1',
    '^libs/(.*)$': '<rootDir>/src/design/libs/$1',
    '\\.scss$': 'identity-obj-proxy', // @see https://jestjs.io/docs/en/webpack#mocking-css-modules
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '^placeholder-svg-loader?.*': '<rootDir>/jest/__mocks__/fileMock.js',
  },
  testRegex: '\\.test\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', 'jest/storyshots-puppeteer.test.ts$'],
  collectCoverage: true,
  collectCoverageFrom: ['src/design/**/*.{ts,tsx}', '!src/design/**/*.stories.tsx'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      // TODO: will upgrade value later.
      branches: 50,
      functions: 40,
      lines: 50,
      statements: 50,
    },
  },
  coverageReporters: ['json', 'text', 'clover', ['lcov', { projectRoot: '/' }], 'text-summary'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
};
