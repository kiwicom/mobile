## Native modules example

This example is meant as an example of how to communicate between native(iOS/Android) code and Javascript code. 

It shows how to send callbacks and how to send and respond to events.

### Run instructions

To run this example,  change the content of the <Project_root>/index.js file to:

```
import { AppRegistry } from 'react-native';

import NativeModuleApp from './app/examples/native-module/NativeModuleApp';

AppRegistry.registerComponent('reactNativeApp', () => NativeModuleApp);
```

- Start the application with `yarn ios` or `yarn android`
- When you click the button, a call goes to native code which will trigger an event, and a callback. 
