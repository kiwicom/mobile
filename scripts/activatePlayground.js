// @flow

const fs = require('fs');
const path = require('path');
const os = require('os');
const execSync = require('child_process').execSync;
const findSync = require('find-in-files').findSync;

const indexFilePath = path.join(__dirname, '..', 'index.js');
const playgroundImportsFilePath = path.join(
  __dirname,
  '..',
  'app',
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
import App from './app/playground/src/Navigation';

AppRegistry.registerComponent('reactNativeApp', () => App);
`;

fs.writeFileSync(indexFilePath, indexFileContent);

// conviently enough, find sync returs a promise
findSync('PlaygroundRenderer.render', 'app')
  .then(files => {
    return Object.keys(files);
  })
  .then(playgroundTestFiles => {
    const playgroundImportsFileContent = [
      '// @flow',
      '',
      playgroundTestFiles
        .map(
          // Replacing app from filepath with ../.. which is the path from playgroundList component to app folder
          item => `import '${item.replace('app', '../..')}';`,
        )
        .join(os.EOL),
      '',
    ].join(os.EOL);

    fs.writeFileSync(playgroundImportsFilePath, playgroundImportsFileContent);

    // Can also be started on android with yarn playground android
    execSync(`yarn ${process.argv[2] || 'ios'}`, { stdio: 'inherit' });
  });
