// @flow

import * as React from 'react';
import { Platform, BackHandler } from 'react-native';
import { shallow } from 'enzyme';

import { AllHotelsNavigationScreen } from '../AllHotelsNavigationScreen';

const props = {
  navigation: {},
  currency: 'EUR',
  coordinates: null,
  onSearchChange: jest.fn(),
  onFilterChange: jest.fn(),
  onLocationChange: jest.fn(),
  onCityIdChange: jest.fn(),
};

const renderNavigationScreen = (onBackClicked: Function) => {
  const renderProps = {
    ...props,
    onBackClicked,
  };
  // $FlowIssue: https://github.com/facebook/flow/issues/2405
  return shallow(<AllHotelsNavigationScreen {...renderProps} />);
};

describe('AllHotelsNavigationScreen', () => {
  it('registers an event listener if platform is android', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'android';
    BackHandler.addEventListener = jest.fn(() => 1);
    const wrapper = renderNavigationScreen(onBackClicked);
    wrapper.instance().componentDidMount();

    expect(BackHandler.addEventListener).toHaveBeenCalled();
  });

  it('does not register an event listener if platform is ios', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'ios';
    BackHandler.addEventListener = jest.fn(() => 1);
    const wrapper = renderNavigationScreen(onBackClicked);
    wrapper.instance().componentDidMount();

    expect(BackHandler.addEventListener).not.toHaveBeenCalled();
  });

  it('does not register an event listener if one already is registered', () => {
    const onBackClicked = jest.fn();
    Platform.OS = 'android';
    BackHandler.addEventListener = jest.fn(() => 1);
    const wrapper = renderNavigationScreen(onBackClicked);
    wrapper.instance().componentDidMount();
    wrapper.instance().componentDidMount();

    expect(BackHandler.addEventListener).toHaveBeenCalledTimes(1);
  });
});
