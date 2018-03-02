// @flow

import { Platform, BackHandler } from 'react-native';

import {
  registerBackButtonListener,
  resetBackButtonListener,
} from '../AllHotelsNavigationScreen';

describe('AllHotelsNavigationScreen', () => {
  afterEach(() => {
    resetBackButtonListener();
  });
  it('registers an event listener if platform is android', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'android';
    BackHandler.addEventListener = jest.fn(() => 1);

    registerBackButtonListener(onBackClicked);

    expect(BackHandler.addEventListener).toHaveBeenCalled();
  });

  it('does not register an event listener if platform is ios', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'ios';
    BackHandler.addEventListener = jest.fn(() => 1);

    registerBackButtonListener(onBackClicked);

    expect(BackHandler.addEventListener).not.toHaveBeenCalled();
  });

  it('does not register an event listener if one already is registered', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'android';
    BackHandler.addEventListener = jest.fn(() => 1);

    registerBackButtonListener(onBackClicked);
    registerBackButtonListener(onBackClicked);

    expect(BackHandler.addEventListener).toHaveBeenCalledTimes(1);
  });
});
