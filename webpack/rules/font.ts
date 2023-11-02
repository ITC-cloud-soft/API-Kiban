import { RuleSetRule } from 'webpack';

export const WebpackFontModuleRule: RuleSetRule = {
  test: /\.(woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts/',
      },
    },
  ],
};
