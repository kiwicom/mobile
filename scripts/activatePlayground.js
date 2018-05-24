// @flow strict

const fs = require('fs');
const path = require('path');
const os = require('os');
const execSync = require('child_process').execSync;
const findSync = require('find-in-files').findSync;

const indexFilePath = path.join(__dirname, '..', 'index.js');
const playgroundImportsFilePath = path.join(
  __dirname,
  '..',
  'packages',
  'playground',
  'src',
  'PlaygroundImports.js',
);

const indexFileContent = `// @flow

import { AppRegistry, YellowBox } from 'react-native';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
  'Module R', // ... requires main queue setup since it overrides ...
  'Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()?', // https://github.com/facebook/react-native/issues/18201
]);

// import App from './app/App';
import App from './packages/playground/src/Navigation';

AppRegistry.registerComponent('reactNativeApp', () => App);
`;

fs.writeFileSync(indexFilePath, indexFileContent);

let playgroundTestFiles = [];

const appPromise = findSync('PlaygroundRenderer.render', 'app').then(files => {
  playgroundTestFiles = playgroundTestFiles.concat(Object.keys(files));
});

const packagePromise = findSync('PlaygroundRenderer.render', 'packages').then(
  files => {
    playgroundTestFiles = playgroundTestFiles.concat(Object.keys(files));
  },
);

Promise.all([appPromise, packagePromise]).then(() => {
  const playgroundImportsFileContent = [
    '// @flow',
    '',
    playgroundTestFiles
      .map(item => `import '${item.replace(/(app|packages)/, '../../../$1')}';`)
      .join(os.EOL),
    '',
  ].join(os.EOL);

  fs.writeFileSync(playgroundImportsFilePath, playgroundImportsFileContent);

  // Can also be started on android with yarn playground android
  execSync(`yarn ${process.argv[2] || 'ios'}`, { stdio: 'inherit' });
});
