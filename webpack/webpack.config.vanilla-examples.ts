import fs from 'fs';
import { resolve } from 'path';
import { ConfigurationFactory, DefinePlugin, SingleEntryPlugin } from 'webpack';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { WebpackIconModuleRule } from './rules/icon';
import { WebpackScssModuleVanillaRule } from './rules/scss';
import { WebpackTsModuleRule } from './rules/ts';
import { WebpackTsxModuleRule } from './rules/tsx';
import { WebpackFontModuleRule } from './rules/font';
import { WebpackImageModuleRule } from './rules/image';

const isProduction = process.env.NODE_ENV === 'production';

const config: ConfigurationFactory = async () => {
  const vanillaExamplePath = '../src/vanilla-examples/';

  const scriptPlugins = fs
    .readdirSync(resolve(__dirname, vanillaExamplePath))
    .filter(fileName => fileName.match(/\.ts$/))
    .map(fileName => {
      return new SingleEntryPlugin(
        resolve(__dirname, vanillaExamplePath),
        './' + fileName,
        fileName.replace(/\.ts$/, '')
      );
    });

  const buildPlugins = fs
    .readdirSync(resolve(__dirname, vanillaExamplePath))
    .filter(fileName => fileName.match(/\.html\.tsx$/))
    .map(sourceFileName => {
      const filename = sourceFileName.replace(/\.tsx$/, '');
      const examplePath = resolve(__dirname, vanillaExamplePath, sourceFileName);
      const scriptChunkName = sourceFileName.replace(/\.html\.tsx$/, '');

      return new HtmlWebpackPlugin({
        filename,
        template: examplePath,
        inject: 'body',
        minify: false, // Because `src/vanilla-examples/render` beautify the HTML
        chunks: ['components', scriptChunkName],
        chunksSortMode: 'manual',
        meta: {
          charset: {
            charset: 'utf-8',
          },
          'x-ua-compatible': {
            'http-equiv': 'x-ua-compatible',
            content: 'IE=edge',
          },
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      });
    });

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      components: [
        resolve(__dirname, '../src/design/vanilla.ts'),
        // resolve(__dirname, '../src/design/styles/fonts.scss'),
        resolve(__dirname, '../src/design/styles/index.scss'),
      ],
    },
    output: {
      path: resolve(__dirname, '../dist/vanilla-examples'),
      filename: 'assets/js/[name].js',
    },
    resolve: {
      plugins: [
        new TsconfigPathsWebpackPlugin({
          configFile: resolve(__dirname, '../tsconfig.json'),
        }),
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    resolveLoader: {
      alias: {
        'placeholder-svg-loader': resolve(__dirname, './loaders/placeholder-svg-loader.ts'),
      },
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          sourceMap: false,
          terserOptions: {
            compress: {
              passes: 2,
            },
          },
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'assets/css/components.css' }),
      new DefinePlugin({
        'window.navigator.userAgent': JSON.stringify('WEBPACK_SSR'),
      }),
      ...scriptPlugins,
      ...buildPlugins,
    ],
    module: {
      rules: [
        WebpackFontModuleRule,
        WebpackScssModuleVanillaRule,
        WebpackIconModuleRule,
        WebpackImageModuleRule,
        WebpackTsModuleRule,
        WebpackTsxModuleRule,
      ],
    },
    performance: {
      assetFilter: assetFilename => !/\.woff2$/.test(assetFilename),
    },
    devServer: {
      host: 'localhost',
      disableHostCheck: true,
      port: 8000,
      open: true,
      contentBase: resolve(__dirname, '../dist/vanilla-examples'),
      watchContentBase: true,
    },
  };
};

export default config;
