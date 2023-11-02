import { resolve } from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions: any = () => {
  return {
    comparisonMethod: 'ssim',
    failureThreshold: 0.01, // 1%
    failureThresholdType: 'percent',
  };
};

const emulateViewports: any = [
  { width: 1280, height: 768 },
  { width: 375, height: 568 }
];

const storyshotsOptions: any = {
  suite: 'Puppeteer Storyshots',
  test: imageSnapshot({
    storybookUrl: `file://${resolve(__dirname, '../dist/storybook')}`,
    getMatchOptions,
    // @ts-ignore
    emulateViewports,
  }),
};

initStoryshots(storyshotsOptions);
