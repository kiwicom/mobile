// @flow

// import { FileSystem } from 'expo';
import nodeUrl from 'url';
// TODO: Fix this
const FileSystem = {};
/**
 * @see https://docs.expo.io/versions/latest/sdk/filesystem.html
 */
export default new class AssetsDownloader {
  download = (url: ?string) => {
    if (!url) {
      return;
    }

    const absoluteFileName = this.getAbsoluteFileName(url);

    FileSystem.getInfoAsync(absoluteFileName).then(info => {
      if (info.exists) {
        return; // already downloaded
      }

      FileSystem.downloadAsync(url, absoluteFileName);
    });
  };

  getAbsoluteFileName = (url: string) => {
    const parsedUrl = nodeUrl.parse(url);
    if (parsedUrl.pathname) {
      const fileName = parsedUrl.pathname.match(/[^/]+\.[^/]+/);
      return FileSystem.documentDirectory + fileName;
    }
    return false;
  };
}();
