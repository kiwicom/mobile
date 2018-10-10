// @flow strict

import { unzip } from 'react-native-zip-archive';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default async (sourcePath: string, targetPath: string) => {
  if (Platform.OS === 'ios') {
    throw new Error('Not yet bridged.');
  }

  const { DocumentDir } = RNFetchBlob.fs.dirs;

  if (DocumentDir === undefined) {
    throw Error('Cannot access DocumentDir.');
  }

  const path = await unzip(
    `${DocumentDir}/${sourcePath}`,
    `${DocumentDir}/${targetPath}`,
  );
  return path;
};
