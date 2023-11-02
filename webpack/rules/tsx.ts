import { RuleSetRule } from 'webpack';

export const WebpackTsxModuleRule: RuleSetRule = {
  test: /\.tsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          // TODO: Add preset-env again if needed
          // ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    },
  ],
};
