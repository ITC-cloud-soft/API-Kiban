const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, '..'),
  modulePaths: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/jest'],
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
};
