// @flow

import { Platform, BackHandler } from 'react-native';

import AllHotelsNavigationScreen from '../AllHotelsNavigationScreen';

let Component;
let originalPlatform;

beforeEach(() => {
  // $FlowExpectedError: this test works only with 'onBackClicked' thus ignoring all other props
  Component = new AllHotelsNavigationScreen({
    onBackClicked: jest.fn(),
  });
  originalPlatform = Platform.OS;
});

afterEach(() => (Platform.OS = originalPlatform));

describe('AllHotelsNavigationScreen', () => {
  it('registers an event listener if platform is Android', () => {
    Platform.OS = 'android';

    BackHandler.addEventListener = jest.fn(() => true);
    Component.componentDidMount();
    expect(BackHandler.addEventListener).toHaveBeenCalled();
  });

  it('does not register an event listener if platform is iOS', () => {
    Platform.OS = 'ios';

    BackHandler.addEventListener = jest.fn(() => true);
    Component.componentDidMount();
    expect(BackHandler.addEventListener).not.toHaveBeenCalled();
  });

  it('does not register an event listener if one already is registered', () => {
    Platform.OS = 'android';

    BackHandler.addEventListener = jest.fn(() => true);
    Component.componentDidMount();
    Component.componentDidMount();
    Component.componentDidMount();
    expect(BackHandler.addEventListener).toHaveBeenCalledTimes(1);
  });
});
