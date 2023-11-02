/**
 * This is a slightly modified code of https://github.com/meodai/color-names#closest-named-color,
 * but using `css-color-names` instead.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nearestColor from 'nearest-color';
import cssColorNames from 'css-color-names/css-color-names.json';

const colorHex = process.argv[2];

process.stdout.write('Finding nearest color name of ' + colorHex);

if (typeof colorHex !== 'string' || !colorHex.match(/^#[0-9a-fA-F]{6}$/)) {
  throw new Error('Please provide a color hex like #123456 as 1st argument.');
}

// const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
// const color = nearestColor.from(colors)(colorHex);
const color = nearestColor.from(cssColorNames)(colorHex);

process.stdout.write(' ==> ' + color.name + '\n');
