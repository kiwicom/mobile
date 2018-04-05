// @flow

import { NativeModules } from 'react-native';

import RootComponent from '../RootComponent';

describe('RootComponent', () => {
  it('should call props.navigation.goBack if NativeModules.RNNavigationModule is not defined', () => {
    const onBackClicked = jest.fn();
    const Component = new RootComponent({
      onBackClicked,
      render: jest.fn(),
      dataSaverEnabled: true,
    });
    Component.onBackClicked();
    expect(onBackClicked).toBeCalled();
  });

  it('should call NativeModules.RNNavigationModule.leaveHotels if it is defined', () => {
    const onBackClicked = jest.fn();
    NativeModules.RNNavigationModule = {
      leaveHotels: jest.fn(),
    };
    const Component = new RootComponent({
      onBackClicked,
      render: jest.fn(),
      dataSaverEnabled: true,
    });

    Component.onBackClicked();
    expect(onBackClicked).not.toBeCalled();
    expect(NativeModules.RNNavigationModule.leaveHotels).toHaveBeenCalled();
  });
});
