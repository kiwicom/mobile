// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { NativeModules } from 'react-native';

import HotelsPackageWrapper from '../HotelsPackageWrapper';

const getProps = (goBack: Function) => ({
  navigation: {
    goBack,
  },
});

describe('HotelsPackageWrapper', () => {
  it('should call props.navigation.goBack if NativeModules.RNNavigationModule is not defined', () => {
    const goBack = jest.fn();
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <HotelsPackageWrapper {...getProps(goBack)} />,
    );

    testRenderer.root.instance.handleNavigation();
    expect(goBack).toBeCalled();
  });

  it('should call NativeModules.RNNavigationModule.leaveHotels if it is defined', () => {
    const goBack = jest.fn();
    NativeModules.RNNavigationModule = {
      leaveHotels: jest.fn(),
    };
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <HotelsPackageWrapper {...getProps(goBack)} />,
    );

    testRenderer.root.instance.handleNavigation();
    expect(goBack).not.toBeCalled();
    expect(NativeModules.RNNavigationModule.leaveHotels).toHaveBeenCalled();
  });
});
