// @flow

import * as React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import AsyncStorage from '@react-native-community/async-storage';

import WithStorage from '../WithStorage';

const WrappedComponent = () => <View />;

const TestKey = 'test-key';

const getComponent = (initialValue: any = []) => {
  const Component = WithStorage(WrappedComponent, TestKey, initialValue);
  return renderer.create(<Component />);
};
jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => 5),
  setItem: jest.fn(),
}));

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

  it('returns initialValue if there is no stored value', async () => {
    const getItem = AsyncStorage.getItem;
    AsyncStorage.getItem = jest.fn(() => null);

    const component = getComponent({ lol: 'lol' });
    const instance = component.getInstance();

    const storedValue = await instance.getStoredValue();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(TestKey);
    expect(storedValue).toEqual({ lol: 'lol' });
    AsyncStorage.getItem = getItem;
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
