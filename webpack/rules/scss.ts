import { RuleSetRule, RuleSetLoader } from 'webpack';
import Fiber from 'fibers';
import Sass from 'sass';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sassGlobImporter from 'node-sass-glob-importer';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const postCssLoader: RuleSetLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [autoprefixer(), cssnano()],
    },
  },
};

/**
 * Use Dart Sass instead of node-sass
 */
const sassLoader: RuleSetLoader = {
  loader: 'sass-loader',
  options: {
    implementation: Sass,
    sassOptions: {
      importer: sassGlobImporter(),
      fiber: Fiber,
    },
  },
};

// For production build
export const WebpackScssModuleProductionRule: RuleSetRule = {
  test: /\.scss$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', postCssLoader, sassLoader],
};

// For vanilla example build
export const WebpackScssModuleVanillaRule: RuleSetRule = {
  test: /\.scss$/,
  use: [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../',
    },
  },
  'css-loader', postCssLoader, sassLoader],
};

// For Storybook
export const WebpackScssModuleStorybookRule: RuleSetRule = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', postCssLoader, sassLoader],
};
