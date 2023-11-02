import { RuleSetRule } from 'webpack';

export const WebpackImageModuleRule: RuleSetRule = {
  test: /images(\/|\\).+\.(svg|jpg|png|gif)$/,
  exclude: /images(\/|\\)icons(\/|\\).+\.svg$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/images/',
      },
    },
  ],
};
