// @flow

/* eslint-disable require-await */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /\.build[/\\].*/,
  /ios[/\\]build[/\\].*/,
  // /.*\/__tests__\/.*/,
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    blacklistRE: new RegExp(
      '(' +
        sharedBlacklist
          .map(regexp => regexp.source.replace(/\//g, path.sep))
          .join('|') +
        ')$',
    ),
  },
};
