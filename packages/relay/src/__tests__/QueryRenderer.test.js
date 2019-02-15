// @flow

import * as React from 'react';

import QueryRenderer from '../QueryRenderer';
import PrivateEnvironment from '../PrivateEnvironment';
import PublicEnvironment from '../PublicEnvironment';

jest.mock('../PrivateEnvironment');
jest.mock('../PublicEnvironment');
jest.mock('AsyncStorage');

afterEach(() => {
  jest.resetAllMocks();
});

const retry = () => {};

describe('QueryRenderer', () => {
  it('returns general error component for network failure', () => {
    // $FlowExpectedError: Don't need all props for this test
    const QR = new QueryRenderer({});
    expect(
      QR.renderRelayContainer({
        error: new TypeError('Network request failed'),
        retry,
      }),
    ).toMatchSnapshot();
  });

  it('returns general error for other errors', () => {
    // $FlowExpectedError: Don't need all props for this test
    const QR = new QueryRenderer({});
    expect(
      QR.renderRelayContainer({ error: new Error('custom message'), retry }),
    ).toMatchSnapshot();
  });

  it('returns loader if no props and no errors', () => {
    // $FlowExpectedError: Don't need all props for this test
    const QR = new QueryRenderer({});
    expect(
      QR.renderRelayContainer({
        retry,
      }),
    ).toMatchSnapshot();
  });

  it('calls renderOfflineScreen if passed', () => {
    const renderOfflineScreen = jest.fn();

    // $FlowExpectedError: Don't need all props for this test
    const QR = new QueryRenderer({ renderOfflineScreen });
    QR.renderRelayContainer({
      error: new TypeError('Network request failed'),
      retry,
    });
    expect(renderOfflineScreen).toHaveBeenCalledWith(retry);
  });

  it('renders footerComponent if passed', () => {
    const Footer = () => 'test';

    // $FlowExpectedError: Don't need all props for this test
    const QR = new QueryRenderer({ footer: <Footer /> });
    expect(
      QR.renderRelayContainer({
        retry,
      }),
    ).toMatchSnapshot();
  });

  it('calls PublicEnvironment.getEnvironment if no token is passed', () => {
    let token;
    // $FlowExpectedError: Intentionally testing what happens if undefined is passed
    let Component = new QueryRenderer({ accessToken: token });
    Component.createEnvironment();
    expect(PublicEnvironment.getEnvironment).toHaveBeenCalledTimes(1);

    // $FlowExpectedError: Don't need to pass all props for this test
    Component = new QueryRenderer({ accessToken: null });
    Component.createEnvironment();
    expect(PublicEnvironment.getEnvironment).toHaveBeenCalledTimes(2);

    // $FlowExpectedError: Don't need to pass all props for this test
    Component = new QueryRenderer({ accessToken: '' });
    Component.createEnvironment();
    expect(PublicEnvironment.getEnvironment).toHaveBeenCalledTimes(3);
    expect(PrivateEnvironment.getEnvironment).not.toHaveBeenCalled();
  });

  it('calls PrivateEnvironment.getEnvironment if token is passed', () => {
    // $FlowExpectedError: Don't need to pass all props for this test
    const Component = new QueryRenderer({ accessToken: 'token' });
    Component.createEnvironment();
    expect(PrivateEnvironment.getEnvironment).toHaveBeenCalledWith('token');
  });
});
