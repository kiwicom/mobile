// @flow strict

import RNFetchBlob from 'react-native-fetch-blob';

import AssetsDownloader from '../AssetsDownloader';

jest.mock('react-native-fetch-blob', () => {
  return {
    config: () => ({
      fetch: async () => ({
        path: () => {},
      }),
    }),
    polyfill: () => {},
    fs: {
      dirs: {
        DocumentDir: 'ait',
      },
      exists: () => {},
    },
  };
});

describe('AssetsDownloader', () => {
  it('downloads asset if it does not exist', async () => {
    const fetch = jest.fn(() => ({ path: jest.fn() }));
    RNFetchBlob.fs.exists = jest.fn(async () => false);
    RNFetchBlob.config = jest.fn(() => ({ fetch }));
    await AssetsDownloader('lol', 'url');

    expect(RNFetchBlob.config).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('GET', 'url');
  });

  it('does not download asset if it already exists', async () => {
    const fetch = jest.fn(() => ({ path: jest.fn() }));
    RNFetchBlob.fs.exists = jest.fn(async () => true);
    RNFetchBlob.config = jest.fn(() => ({ fetch }));

    const path = await AssetsDownloader('lol', 'url');

    expect(RNFetchBlob.config).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
    expect(path).toEqual(`file:///${RNFetchBlob.fs.dirs.DocumentDir}/lol`);
  });

  it('overwrites existing file if asked to', async () => {
    const fetch = jest.fn(() => ({ path: jest.fn() }));
    RNFetchBlob.fs.exists = jest.fn(async () => true);
    RNFetchBlob.config = jest.fn(() => ({ fetch }));

    await AssetsDownloader('lol', 'url', true);

    expect(RNFetchBlob.config).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('GET', 'url');
  });
});
