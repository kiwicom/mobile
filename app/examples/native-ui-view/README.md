## Native ui view example

This example is meant as an example of how to bridge native views to JS view and passing props from JS to native

A more detailed how to guide can be found [here](https://moduscreate.com/blog/swift-modules-for-react-native/)

### Run instructions
To run this example,  change the content of the <Project_root>/index.js file to:
```
// @flow

import { AppRegistry } from 'react-native';

import App from './app/examples/native-ui-view/NativeUIApp';

AppRegistry.registerComponent('reactNativeApp', () => App);


```

- Start the application with yarn ios

### About android

Currently not implemented in android
