import { resolve } from 'path';
import { Configuration } from 'webpack';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import { WebpackIconModuleRule } from '../webpack/rules/icon';
import { WebpackScssModuleStorybookRule } from '../webpack/rules/scss';

const stories = ['../src/design/components/**/*.stories.tsx'];
process.env.NODE_ENV !== 'test' && stories.unshift('../docs/storybook/**/*.stories.mdx'); // Because Storyshots also uses stories.

// Storyshots addon doesn't `export default` and is mentioned to use `module.exports` instead.
// @see https://github.com/storybookjs/storybook/issues/9576#issuecomment-582416595
module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html/register',
    'storybook-addon-paddings',
  ],
  webpackFinal: async (config: Configuration) => {
    if (!config.module) {
      return config;
    }

    config.resolve?.plugins?.push(
      new TsconfigPathsWebpackPlugin({
        configFile: resolve(__dirname, '../tsconfig.json'),
      })
    );

    // Add inline placeholder SVG loader
    config.resolveLoader = {
      ...config.resolveLoader,
      alias: {
        ...config.resolveLoader?.alias,
        'placeholder-svg-loader': resolve(__dirname, '../webpack/loaders/placeholder-svg-loader.ts'),
      },
    };

    // Remove image related rules from default config
    config.module.rules.forEach(rule => {
      if (rule.test?.toString().includes('svg')) {
        rule.exclude = /images(\/|\\)icons(\/|\\).+\.svg$/;
      }
    });

    config.module.rules.push(WebpackScssModuleStorybookRule);
    config.module.rules.push(WebpackIconModuleRule);
    config.performance = {
      ...config.performance,
      assetFilter: assetFilename => !/\.(woff2|js|map)$/.test(assetFilename),
    };

    return config;
  },
};
