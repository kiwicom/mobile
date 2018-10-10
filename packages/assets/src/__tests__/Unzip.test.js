// @flow strict

import { unzip } from 'react-native-zip-archive';
import { Platform } from 'react-native';

import Unzip from '../Unzip';

jest.mock('react-native-zip-archive', () => ({
  unzip: jest.fn(),
}));

let OriginalPlatform;

beforeEach(() => {
  OriginalPlatform = Platform.OS;
});

afterEach(() => {
  Platform.OS = OriginalPlatform;
});

describe('Unzip', () => {
  it('throws error on ios', async () => {
    Platform.OS = 'ios';
    expect.assertions(1);
    try {
      await Unzip('', '');
    } catch (e) {
      expect(e.message).toBe('Not yet bridged.');
    }
  });

  it('calls unzip on android', async () => {
    Platform.OS = 'android';
    await Unzip('source', 'target');
    expect(unzip).toHaveBeenCalledWith('ait/source', 'ait/target');
  });
});
