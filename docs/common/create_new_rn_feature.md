# Create new RN feature from the scratch

Within the `app` folder create new folder dedicated for your package eg. `custom` and then follow the structure below:

```
.
├── app/
│   │── custom/                    - custom application
│           │── appRegistry/       - place for RootComponent and CustomStandalonePackage
│           │── navigation/        - place for StackNavigator
│           │── scenes/            - folder with custom package screens
│           │── index.js           - file which is exporting CustomStandalonePackage
│           └── package.json
```

## appRegistry

### RootComponent

That file is representing the context providers which are passing data through the component tree for your application without having to pass props down manually at every level.

```js
<Dimensions.Provider dimensions={this.props.dimensions}>
  <AuthContext.Provider
    accessToken={this.props.accessToken || null}
    bookingId={this.props.bookingId || null}
    simpleToken={this.props.simpleToken || null}
  >
    {this.props.children}
  </AuthContext.Provider>
</Dimensions.Provider>
```

_For more details check [Context documentation]('https://reactjs.org/docs/context.html')_

### CustomStandalonePackage

1. Render stack navigator wrapped in `RootComponent`

2. To avoid problems on native navigation <-> RN navigation export standalone package wrapped within `WithNativeNavigation` HOC

```js
export default WithNativeNavigation(CustomStandalonePackage, 'Custom');
```

## navigation

### CustomStack

Within `navigation` folder create your `StackNavigator` which provides a way for your app to transition between screens where each new screen is placed on top of a stack.

The example stack navigator should look like:

```js
export default StackNavigator(
  {
    Custom: {
      screen: CustomScreen,
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen'))
      }
    }
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Custom',
    mode: 'modal'
  }
);
```

_For more details check [React Navigation documentation]('https://reactnavigation.org/docs/en/stack-navigator.html')_

## scenes

### CustomScreen

Screen which is on the top of the navigation stack. Within you can define your component, where the only thing that's required is a `render` function which returns some JSX to render.

The example screen can look like:

```js
import * as React from 'react';
import { Text, View } from 'react-native';

export default class CustomScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is custom screen</Text>
      </View>
    );
  }
}
```

## package.json

`Package.json` file holds various metadata relevant to the project and handle the project's dependencies.

Define there:

```json
{
  "name": "@kiwicom/custom-app", //your package name
  "version": "0.0.24",
  "private": true,
  "main": "index.js", // the primary entry point for your app
  "dependencies": {
    // dependecies which you use across the whole app
    "@kiwicom/mobile-config": "^0",
    "@kiwicom/mobile-localization": "^0",
    "@kiwicom/mobile-navigation": "^0",
    "@kiwicom/mobile-orbit": "^0",
    "@kiwicom/mobile-relay": "^0",
    "@kiwicom/mobile-shared": "^0"
  }
}
```

_For more details check [documentation]('https://docs.npmjs.com/files/package.json')_

## index.js

Entry point for your package, where you have to export your standalone package:

```js
import CustomStandalonePackage from './src/appRegistry/CustomStandalonePackage';

export { CustomStandalonePackage };
```

## Using package in native

When your package is ready to use in native side you have to register it in [`native.js`]('https://github.com/kiwicom/mobile/blob/master/app/native.js') file:

```js
import { CustomStandalonePackage } from '@kiwicom/custom-app';

AppRegistry.registerComponent('Custom', () => CustomStandalonePackage);
```
