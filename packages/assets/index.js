// @flow strict

import RNFetchBlob from 'rn-fetch-blob';

export const documentDir = `file://${RNFetchBlob.fs.dirs.DocumentDir}`;
export { default as AssetsDownloader } from './src/AssetsDownloader';
export { default as unzip } from './src/Unzip';
