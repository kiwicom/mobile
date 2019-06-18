// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import AuthContext from '../AuthContext';

class ContextConsumer extends React.Component<{ ... }> {
  render() {
    return null;
  }
}

const ConsumerWithContext = () => (
  <AuthContext.Consumer>
    {({ accessToken, actions: { setAccessToken } }) => (
      <ContextConsumer
        accessToken={accessToken}
        setAccessToken={setAccessToken}
      />
    )}
  </AuthContext.Consumer>
);

describe('AuthContext', () => {
  it('provides its state to consumers', () => {
    const wrapper = renderer.create(<ConsumerWithContext />);
    const consumerProps = wrapper.toTree().rendered.props;

    expect(consumerProps.setAccessToken).toBeDefined();
    expect(consumerProps.accessToken).toBeNull();
  });

  it('sets the accessToken', () => {
    const wrapper = renderer.create(
      <AuthContext.Provider>
        <AuthContext.Consumer>
          {({ accessToken, actions: { setAccessToken } }) => (
            <ContextConsumer
              setAccessToken={setAccessToken}
              accessToken={accessToken}
            />
          )}
        </AuthContext.Consumer>
      </AuthContext.Provider>,
    );
    const instance = wrapper.root.findByType(ContextConsumer);
    const token = 'myToken';
    instance.props.setAccessToken(token);

    expect(instance.props.accessToken).toBe(token);
  });
});
