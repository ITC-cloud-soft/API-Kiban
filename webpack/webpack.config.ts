import { resolve } from 'path';
import { ConfigurationFactory, DefinePlugin } from 'webpack';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { WebpackFontModuleRule } from './rules/font';
import { WebpackIconModuleRule } from './rules/icon';
import { WebpackScssModuleProductionRule } from './rules/scss';
import { WebpackTsModuleRule } from './rules/ts';
import { WebpackTsxModuleRule } from './rules/tsx';
import { WebpackImageModuleRule } from './rules/image';

const isProduction = process.env.NODE_ENV === 'production';

const config: ConfigurationFactory = async () => {
  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      components: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        resolve(__dirname, '../src/design/vanilla.ts'),
        resolve(__dirname, '../src/design/styles/index.scss'),
      ],
    },
    output: {
      path: resolve(__dirname, '../dist/assets'),
      filename: 'components.js',
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
      new MiniCssExtractPlugin({ filename: 'components.css' }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
    module: {
      rules: [
        WebpackFontModuleRule,
        WebpackScssModuleProductionRule,
        WebpackIconModuleRule,
        WebpackImageModuleRule,
        WebpackTsModuleRule,
        WebpackTsxModuleRule,
      ],
    },
    performance: {
      assetFilter: assetFilename => !/\.woff2$/.test(assetFilename),
    },
  };
};

export default config;
