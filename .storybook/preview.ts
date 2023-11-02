// @ts-ignore
import { withHTML } from '@whitespace/storybook-addon-html/react';
import smoothscroll from 'smoothscroll-polyfill';
import 'simplebar';
import '../src/design/styles/index.scss';
import './doc.scss';

smoothscroll.polyfill();

const MINIMAL_VIEWPORTS = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '375px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '480px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  paddings: {
    values: [
      { name: 'none', value: '0' },
      { name: 'small', value: '16px' },
      { name: 'medium', value: '32px' },
      { name: 'large', value: '64px' },
    ],
    default: 'none',
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'gray',
        value: '#f6f6f6',
      },
      {
        name: 'black',
        value: '#373a44',
      },
    ],
  },
};

export const decorators = [withHTML];
