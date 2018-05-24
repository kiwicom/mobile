// @flow

import { PartialErrorsEnvironment } from '../Environment';

const getEnvironment = (onPartialError: Function) => {
  return new PartialErrorsEnvironment(
    {
      network: jest.fn(),
      store: jest.fn(),
    },
    onPartialError,
  );
};

describe('PartialErrorsEnvironment', () => {
  it('calls onPartialError when error is present', () => {
    const onPartialError = jest.fn();
    const environment = getEnvironment(onPartialError);
    environment.executePayload({
      response: {
        errors: [1, 2],
      },
      operation: null,
      variables: null,
    });

    expect(onPartialError).toHaveBeenCalledWith(1);
    expect(onPartialError).toHaveBeenCalledWith(2);
  });
  it('does not call onPartialError when error is present', () => {
    const onPartialError = jest.fn();
    const environment = getEnvironment(onPartialError);
    environment.executePayload({
      response: {
        errors: null,
      },
      operation: null,
      variables: null,
    });

    expect(onPartialError).not.toHaveBeenCalled();
  });
});
