import { loader } from 'webpack';
import loaderUtils from 'loader-utils';

interface OPTIONS {
  size?: string,
  color?: string,
  backgroundColor?: string,
}

export default function (
  this: loader.LoaderContext,
) {
  let width = 100;
  let height = 100;
  let fontSize = 14;
  let color = '#9B9B9B';
  let backgroundColor = '#D8D8D8';
  const options = loaderUtils.getOptions(this) as Readonly<OPTIONS> | null;
  const queryObject = this.resourceQuery
    ? (loaderUtils.parseQuery(this.resourceQuery) as Partial<OPTIONS>)
    : undefined;
  const fullOptions: Partial<OPTIONS> = { ...options, ...queryObject };
  if (fullOptions.size) {
    const [newWidth, newHeight] = fullOptions.size.toLowerCase().split('x');
    width = Number(newWidth) || width;
    height = Number(newHeight) || height;
  }
  if (fullOptions.color) {
    color = fullOptions.color;
  }
  if (fullOptions.backgroundColor) {
    backgroundColor = fullOptions.backgroundColor;
  }
  if (width < 1) {
    width = 1;
  }
  if (height < 1) {
    height = 1;
  }
  // calculate text position
  fontSize = 0.12 * height;
  let fontWidth = 0.556 * fontSize;
  const text = `${width}x${height}`;
  if (text.length * fontWidth > width) {
    fontWidth = (0.8 * width) / text.length;
    fontSize = fontWidth / 0.556;
  }
  const fontHeight = 1.143 * fontSize;
  const posY = height / 2 + 0.5 * (fontHeight / 2);
  const posX = (width - text.length * fontWidth) / 2;

  const svgText = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Placeholder-Image</title>
  <g id="placeholder-image" stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
    <g id="placeholder-image-group" transform="translate(1.000000, 0.000000)">
      <rect id="placeholder-rectangle" fill="${backgroundColor}" x="0" y="0" width="${width}" height="${height}"></rect>
      <text id="placeholder-dimention-text" font-family="sans-serif" font-size="${fontSize}" font-weight="bold" fill="${color}">
        <tspan x="${posX}" y="${posY}">${text}</tspan>
      </text>
    </g>
  </g>
</svg>
`;
  const content = Buffer.from(svgText);
  const data = `data:image/svg+xml;base64,${content.toString('base64')}`;

  return `export default ${ JSON.stringify(data) }`;
}
