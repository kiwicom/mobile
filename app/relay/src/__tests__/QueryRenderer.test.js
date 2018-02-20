// @flow

import QueryRenderer from '../QueryRenderer';

it('returns general error component for network failure', () => {
  const QR = new QueryRenderer();
  expect(
    QR.renderRelayContainer({ error: new TypeError('Network request failed') }),
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
