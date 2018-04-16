// @flow

const fs = require('fs');
const path = require('path');

const indexFilePath = path.join(__dirname, '..', 'index.js');

const indexFileContent = `// @flow

import { AppRegistry } from 'react-native';

//import App from './app/App';
import App from './app/playground/src/Navigation';

AppRegistry.registerComponent('reactNativeApp', () => App);
`;

fs.writeFileSync(indexFilePath, indexFileContent);
