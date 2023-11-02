import { RuleSetRule } from 'webpack';
import svgToMiniDataURI from 'mini-svg-data-uri';

/**
 * Embed SVG as data URI in SVG format (Not BASE64).
 * @see https://github.com/webpack-contrib/url-loader#svg
 */
export const WebpackIconModuleRule: RuleSetRule = {
  test: /images(\/|\\)icons(\/|\\).+\.svg$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        generator: (content: string | Buffer) => {
          return svgToMiniDataURI(content.toString());
        },
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: { enabled: false },
        optipng: { enabled: false },
        pngquant: { enabled: false },
        gifsicle: { enabled: false },
        svgo: {},
        webp: { enabled: false },
      },
    },
  ],
};
