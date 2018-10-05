# Create new React Native feature from the scratch

Within the `app` folder create new folder dedicated for a new package e.g. `custom` and then follow the structure below:

```
.
├── app/
│   │── custom/                    - custom application
│           │── appRegistry/       - place for CustomStandalonePackage
│           │── navigation/        - place for StackNavigator
│           │── scenes/            - folder with custom package screens
│           │── index.js           - file which is exporting CustomStandalonePackage
│           └── package.json
```

## appRegistry

### StandalonePackage

This is the name we have given to the entry point of any new application. We now have `NewKiwiHotels`
and `SingleHotel`. SingleHotel is a subset of views in `NewKiwiHotels`, but it is still considered
a standalone package since it is an entry point for native.

We are also working on `MMB` as a new standalone package, and hopefully there will be many more to come.

### CustomStandalonePackage

1. Render stack navigator

2. To avoid problems on native navigation <-> RN navigation export standalone package wrapped within `WithNativeNavigation` HOC

```js
type Props = {||};
class CustomStandalonePackage extends React.Component<Props> {
  render = () => <NavigationStack />;
}
export default WithNativeNavigation(CustomStandalonePackage, 'Custom');
```

## navigation

### CustomStack

Within the `navigation` folder create your `StackNavigator` which provides a way for your app to transition between screens where each new screen is placed on top of the stack.

The stack navigator example should look like:

```js
export default StackNavigator(
  {
    Custom: {
      screen: CustomScreen
    }
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Custom'
  }
);
```

_For more details check:_ [React Navigation documentation]('https://reactnavigation.org/docs/en/stack-navigator.html').

## scenes

### CustomScreen

This is the screen which is on the top of the navigation stack. Within you can define your component, where the only thing that's required is a `render` function.

The example screen can look like:

```js
import * as React from 'react';
import { Text, View } from 'react-native';

export default class CustomScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is a custom screen</Text>
      </View>
    );
  }
}
```

## package.json

The `Package.json` file holds various metadata relevant to the project and handle the project's dependencies.

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

_For more details check the :_ [npm documentation]('https://docs.npmjs.com/files/package.json').

## index.js

Entry point for your package, where you have to export your standalone package:

```js
import CustomStandalonePackage from './src/appRegistry/CustomStandalonePackage';

export { CustomStandalonePackage };
```

## Using the package in native side

When your package is ready to use in the native side you have to register it in [`native.js`]('https://github.com/kiwicom/mobile/blob/master/app/native.js') file:

```js
import { CustomStandalonePackage } from '@kiwicom/custom-app';

AppRegistry.registerComponent('Custom', () => CustomStandalonePackage);
```

### Closing RN module and going back to native side

To close RN module and go back to native side call the `onClosePress` function on back button.

```js
onClosePress = () => {
  // This prop will only come if we launch this screen from a native app
  if (this.props.lastNavigationMode === 'present') {
    GestureController.closeModal('Custom');
  } else {
    this.props.onBackClicked();
  }
};
```
