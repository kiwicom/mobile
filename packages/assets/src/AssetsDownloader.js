// @flow strict

import RNFetchBlob from 'rn-fetch-blob';

export default async (
  fileName: string,
  url: string,
  overwriteExisting?: boolean = false,
): Promise<string | null> => {
  const { DocumentDir } = RNFetchBlob.fs.dirs;
  if (DocumentDir === undefined) {
    throw Error('Cannot access DocumentDir.');
  }

  try {
    const path = `${DocumentDir}/${fileName}`;

    if (!overwriteExisting && (await RNFetchBlob.fs.exists(path))) {
      return `file:///${path}`;
    }

    const response = await RNFetchBlob.config({
      path,
    }).fetch('GET', url);

    return response.path();
  } catch (err) {
    console.warn(err);
    return null;
  }
};
