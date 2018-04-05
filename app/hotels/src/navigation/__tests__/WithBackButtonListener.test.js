// @flow

import { Platform, BackHandler } from 'react-native';

import WithBackButtonListener from '../WithBackButtonListener';

let Component;
let originalPlatform;

beforeEach(() => {
  Component = new WithBackButtonListener({
    onClick: jest.fn(),
    extraCondition: true,
    children: null,
  });
  originalPlatform = Platform.OS;
});

afterEach(() => (Platform.OS = originalPlatform));

describe('WithBackButtonListener', () => {
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
