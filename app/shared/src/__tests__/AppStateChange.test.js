// @flow

import AppStateChange from '../AppStateChange';

const getComponent = (onStateChange: () => void) =>
  new AppStateChange({
    children: jest.fn(),
    states: ['active', 'inactive'],
    onStateChange,
  });

describe('AppStateChange', () => {
  it('calls onStateChange prop if state is in the states prop', () => {
    const onStateChange = jest.fn();
    const Component = getComponent(onStateChange);

    Component.handleAppStateChange('inactive');
    expect(onStateChange).toBeCalledWith('inactive');
  });

  it('does not call onStateChange prop if state is not in the states prop', () => {
    const onStateChange = jest.fn();
    const Component = getComponent(onStateChange);

    Component.handleAppStateChange('background');
    expect(onStateChange).not.toBeCalled();
  });
});
