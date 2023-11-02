import initStoryshots from '@storybook/addon-storyshots';
import MockIntersectionObserver from './__mocks__/IntersectionObserver';

window.IntersectionObserver = MockIntersectionObserver;
jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
}));

// @see https://github.com/testing-library/react-testing-library/issues/459
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (typeof args[0] === 'string' && args[0].indexOf('Each child in a list should have a unique "key" prop') > 0) {
      return;
    }
    return originalError.call(console, args);
  });
});
afterAll(() => {
  console.error = originalError;
  jest.unmock('react-chartjs-2');
});

initStoryshots();
