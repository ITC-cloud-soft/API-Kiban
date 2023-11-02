import { RuleSetRule } from 'webpack';

export const WebpackTsModuleRule: RuleSetRule = {
  // test: /\.ts$/,
  test: /\.(ts|js)?$/,
  // exclude: /node_modules\/(?!flatpickr|event-target-polyfill|core-js)/,
  exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        // TODO: Add preset-env again if needed
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              modules: false,
              corejs: 3,
              targets: {
                browsers: [
                  'edge >= 16',
                  'safari >= 9',
                  'firefox >= 57',
                  'ie >= 11',
                  'ios >= 9',
                  'chrome >= 49'
                ]
              }
            }
          ],
          '@babel/preset-typescript',
        ],
        // presets: ['@babel/preset-typescript'],
        plugins: [
          ['@babel/plugin-transform-modules-commonjs', { "strictMode": false }],
          ['@babel/plugin-proposal-decorators', {
            decoratorsBeforeExport: true
          }],
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          ['@babel/plugin-proposal-class-properties', { "loose": true }],
          '@babel/transform-runtime',
        ],
      },
    },
  ],
};
