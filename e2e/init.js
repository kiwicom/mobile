// @flow

import detox from 'detox';
import adapter from 'detox/runners/jest/adapter';

import { detox as config } from '../package.json';

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
