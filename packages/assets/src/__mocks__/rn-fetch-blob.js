/* @flow */

const RNFetchBlob = {
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

export default RNFetchBlob;
