// @flow

import { FileSystem } from 'expo';
import nodeUrl from 'url';

type Props = {
  url: string,
};

export default function GoogleButton({ url }: Props) {
  const absoluteFileName = getAbsoluteFileName(url);

  FileSystem.getInfoAsync(absoluteFileName).then(info => {
    if (info.exists) {
      return; // already downloaded
    }

    FileSystem.downloadAsync(url, absoluteFileName);
    // .then(({ uri }) => {
    //   console.log(`Downloaded: ${url}`); // file location
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  });
}

export function getAbsoluteFileName(url: string) {
  const parsedUrl = nodeUrl.parse(url);
  if (parsedUrl.pathname) {
    return FileSystem.documentDirectory + parsedUrl.pathname.replace(/^\//, '');
  }
  return false;
}
