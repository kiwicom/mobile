// @flow strict

const path = require('path');

/**
 * This list is basically copy pasted from Metro Bundler but the tests
 * folders are excluded so we can execute tests in the Playground.
 *
 * TODO: do this only in the "playground" environment (not in production)
 *
 * See: https://github.com/facebook/metro/blob/01ab028d4fb3600c89438b0b7916ec8350f8f71a/packages/metro/src/blacklist.js#L17
 */
const sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /\.build[/\\].*/,
  // /.*\/__tests__\/.*/,
];

module.exports = {
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
