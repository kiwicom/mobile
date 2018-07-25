// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';

import TravelDocumentModalScreen from '../TravelDocumentModalScreen';

jest.mock('../../components/TitleTranslation.js', () => () => null);
jest.mock('DatePickerIOS');

const navigation = {
  setParams: jest.fn(),
};

const getInstance = () =>
  renderer
    .create(
      // $FlowExpectedError: All props not needed for this test
      <TravelDocumentModalScreen expiryDate={null} navigation={navigation} />,
    )
    .getInstance();

afterEach(() => {
  jest.resetAllMocks();
});

describe('TravelDocumentModalScreen', () => {
  it('should validate onIdNumberChange correctly', () => {
    const instance = getInstance();
    expect(instance.state.error.idNumber).toBe(false);

    instance.onIdNumberChange('1');
    expect(instance.state.error.idNumber).toBe(true);

    instance.onIdNumberChange('12345');
    expect(instance.state.error.idNumber).toBe(false);
  });

  it('should validate onDateChange correctly', () => {
    const instance = getInstance();
    expect(instance.state.error.expiryDate).toBe(true);

    instance.onDateChange(new Date());
    expect(instance.state.error.expiryDate).toBe(false);
  });

  it('should validate onNoExpiryChange correctly', () => {
    const instance = getInstance();
    expect(instance.state.error.expiryDate).toBe(true);

    instance.onDateChange(new Date());
    expect(instance.state.error.expiryDate).toBe(false);

    instance.onNoExpiryChange(false);
    expect(instance.state.error.expiryDate).toBe(true);
  });

  it('should disable header button correctly', () => {
    const instance = getInstance();
    jest.resetAllMocks();

    instance.onIdNumberChange('12345');
    expect(navigation.setParams).toHaveBeenCalledWith({ disabled: true });
    expect(navigation.setParams).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();

    instance.onDateChange(new Date());
    expect(navigation.setParams).toHaveBeenCalledWith({ disabled: false });
    expect(navigation.setParams).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();

    instance.onIdNumberChange('2');
    expect(navigation.setParams).toHaveBeenCalledWith({ disabled: true });
    expect(navigation.setParams).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();

    instance.onIdNumberChange('12345');
    jest.resetAllMocks();
    instance.onNoExpiryChange(true);
    expect(navigation.setParams).toHaveBeenCalledWith({ disabled: false });
    expect(navigation.setParams).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();
  });
});
