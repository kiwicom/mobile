// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { NativeModules } from 'react-native';

import HotelsPackage from '../';

const getProps = (onBackClicked: Function) => ({
  onBackClicked,
  bookingComAffiliate: '',
  language: '',
  currency: '',
  dataSaverEnabled: false,
  coordinates: null,
});

describe('HotelsPackage', () => {
  it('should call props.navigation.goBack if NativeModules.RNNavigationModule is not defined', () => {
    const onBackClicked = jest.fn();
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <HotelsPackage {...getProps(onBackClicked)} />,
    );

    testRenderer.root.instance.onBackClicked();
    expect(onBackClicked).toBeCalled();
  });

  it('should call NativeModules.RNNavigationModule.leaveHotels if it is defined', () => {
    const onBackClicked = jest.fn();
    NativeModules.RNNavigationModule = {
      leaveHotels: jest.fn(),
    };
    const testRenderer = renderer.create(
      // $FlowIssue: https://github.com/facebook/flow/issues/2405
      <HotelsPackage {...getProps(onBackClicked)} />,
    );

    testRenderer.root.instance.onBackClicked();
    expect(onBackClicked).not.toBeCalled();
    expect(NativeModules.RNNavigationModule.leaveHotels).toHaveBeenCalled();
  });
});
