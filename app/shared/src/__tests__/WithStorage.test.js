// @flow

import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import renderer from 'react-test-renderer';

import WithStorage from '../WithStorage';

jest.mock('AsyncStorage', () => ({
  getItem: jest.fn(() => 5),
  setItem: jest.fn(),
}));

const WrappedComponent = () => <View />;

const TestKey = 'test-key';

const getComponent = (initialValue: any = []) => {
  const Component = WithStorage(WrappedComponent, TestKey, initialValue);
  return renderer.create(<Component />);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('WithStorage', () => {
  it('injects storageValue', () => {
    const component = getComponent();

    expect(
      component.root.findByType(WrappedComponent).props.storageValue,
    ).toEqual([]);
  });

  it('injects saveToStorage function', () => {
    const component = getComponent();

    expect(
      typeof component.root.findByType(WrappedComponent).props.saveToStorage,
    ).toBe('function');
  });

  it('gets the stored value', async () => {
    const component = getComponent();
    const instance = component.getInstance();

    await instance.getStoredValue();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(TestKey);
    expect(instance.state).toEqual({ savedValue: 5 });
    expect(
      component.root.findByType(WrappedComponent).props.storageValue,
    ).toEqual(5);
  });

  it('saveValue saves the value to async store', async () => {
    const component = getComponent();
    const instance = component.getInstance();

    await instance.saveValue({ test: 'lol' });
    expect(AsyncStorage.setItem).toBeCalledWith(
      TestKey,
      JSON.stringify({ test: 'lol' }),
    );
  });

  it('handles number as input value', async () => {
    const component = getComponent(45);
    const instance = component.getInstance();

    await instance.saveValue(34);
    expect(AsyncStorage.setItem).toBeCalledWith(TestKey, JSON.stringify(34));
  });

  it('handles boolean as input value', async () => {
    const component = getComponent(false);
    const instance = component.getInstance();

    await instance.saveValue(true);
    expect(AsyncStorage.setItem).toBeCalledWith(TestKey, JSON.stringify(true));
  });

  it('handles string as input value', async () => {
    const component = getComponent('lol');
    const instance = component.getInstance();

    await instance.saveValue('roflmao');
    expect(AsyncStorage.setItem).toBeCalledWith(
      TestKey,
      JSON.stringify('roflmao'),
    );
  });

  it('handles string as date value', async () => {
    const component = getComponent(new Date());
    const instance = component.getInstance();
    const date = new Date();
    await instance.saveValue(date);
    expect(AsyncStorage.setItem).toBeCalledWith(TestKey, JSON.stringify(date));
  });
});
