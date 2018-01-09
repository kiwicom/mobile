/* eslint-disable flowtype/require-valid-file-annotation */
/*
  This file is needed because packager fails when it findes react-native module in ./node_modules/
  and in ./rnApp/reactNativeApp/node_modules/
  This file should be abundant when we finish migrating to pure react native
*/
const blacklist = require('metro-bundler/src/blacklist');

var config = {
  getBlacklistRE: function() {
    return blacklist([/rnApp\/.*/]);
  },
};

module.exports = config;
