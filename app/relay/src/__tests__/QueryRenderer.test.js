// @flow

import QueryRenderer from '../QueryRenderer';
import PrivateEnvironment from '../PrivateEnvironment';
import PublicEnvironment from '../PublicEnvironment';

jest.mock('../PrivateEnvironment');
jest.mock('../PublicEnvironment');

afterEach(() => {
  jest.resetAllMocks();
});

describe('QueryRenderer', () => {
  it('returns general error component for network failure', () => {
    const QR = new QueryRenderer();
    expect(
      QR.renderRelayContainer({
        error: new TypeError('Network request failed'),
      }),
    ).toMatchSnapshot();
  });

  it('returns general error for other errors', () => {
    const QR = new QueryRenderer();
    expect(
      QR.renderRelayContainer({ error: new Error('custom message') }),
    ).toMatchSnapshot();
  });

  it('returns loader if no props and no errors', () => {
    const QR = new QueryRenderer();
    expect(QR.renderRelayContainer({})).toMatchSnapshot();
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

  it('calls PrivateEnvironemtn.getEnvironment if token is passed', () => {
    // $FlowExpectedError: Don't need to pass all props for this test
    const Component = new QueryRenderer({ accessToken: 'token' });
    Component.createEnvironment();
    expect(PrivateEnvironment.getEnvironment).toHaveBeenCalled();
  });
});
