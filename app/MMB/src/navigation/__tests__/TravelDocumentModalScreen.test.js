// @flow strict

import { TravelDocumentModalScreen } from '../TravelDocumentModalScreen';

const navigation = {
  setParams: jest.fn(),
};

afterEach(() => {
  jest.resetAllMocks();
});

const getComponent = props =>
  // $FlowExpectedError: Passing just props needed to run test
  new TravelDocumentModalScreen({
    ...props,
    navigation,
  });

describe('TravelDocumentModalScreen', () => {
  it('should call navigation setParams when a idNumber changes', () => {
    const Component = getComponent({
      idNumber: 'a',
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({ idNumber: 'ab' });
    expect(navigation.setParams).toBeCalledWith({ disabled: true });
  });

  it('should call navigation setParams when a expiryDate changes', () => {
    const Component = getComponent({
      idNumber: 'a',
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({ expiryDate: new Date() });
    expect(navigation.setParams).toBeCalledWith({ disabled: true });
  });

  it('should call navigation setParams when a noExpiry changes', () => {
    const Component = getComponent({
      noExpiry: false,
      idNumber: '',
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({ noExpiry: true, idNumber: '' });
    expect(navigation.setParams).toBeCalledWith({ disabled: true });
  });

  it('should not call set params if idNumber and expiry date remain unchanged', () => {
    const Component = getComponent({
      idNumber: 'a',
      expiryDate: null,
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({
      idNumber: 'a',
      expiryDate: null,
    });
    expect(navigation.setParams).not.toHaveBeenCalled();
  });

  it('should enable save button if idNumber > 5 && expiryDate is set', () => {
    const Component = getComponent({
      idNumber: '123456',
      expiryDate: new Date(),
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({
      idNumber: '123456',
      expiryDate: null,
    });
    expect(navigation.setParams).toBeCalledWith({ disabled: false });
  });

  it('should enable save button if idNumber > 5 && noExpiry is true', () => {
    const Component = getComponent({
      idNumber: '123456',
      expiryDate: null,
      noExpiry: true,
    });

    // $FlowExpectedError: Passing just props needed to run test
    Component.componentDidUpdate({
      idNumber: '12345',
      expiryDate: null,
    });
    expect(navigation.setParams).toBeCalledWith({ disabled: false });
  });
});
