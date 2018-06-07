// @flow strict

import RNFetchBlob from 'react-native-fetch-blob';

export const documentDir = `file://${RNFetchBlob.fs.dirs.DocumentDir}`;
export { default as AssetsDownloader } from './src/AssetsDownloader';
