// @flow

import * as React from 'react';
import { CenteredView, LinkButton } from '@kiwicom/react-native-app-common';

import EmailLoginForm from './EmailLoginForm';
import GoogleLoginForm from './GoogleLoginForm';

type Props = {|
  onLogin: (accessToken: string) => void,
|};

type State = {|
  loginViaFederatedIdentities: boolean,
|};

export default class Login extends React.Component<Props, State> {
  state: State = {
    loginViaFederatedIdentities: true,
  };

  toggleFederatedIdentities = () =>
    this.setState(prevState => ({
      loginViaFederatedIdentities: !prevState.loginViaFederatedIdentities,
    }));

  handleSuccessfulLogin = (accessToken: string) =>
    this.props.onLogin(accessToken);

  render = () => {
    const toggleButton = title => (
      <LinkButton
        key={title}
        title={title}
        onPress={this.toggleFederatedIdentities}
      />
    );

    return (
      <CenteredView>
        {this.state.loginViaFederatedIdentities
          ? [
              <GoogleLoginForm
                key="google"
                onSuccess={this.handleSuccessfulLogin}
              />,
              toggleButton('Login using email'),
            ]
          : [
              <EmailLoginForm
                key="email"
                onSuccess={this.handleSuccessfulLogin}
              />,
              toggleButton('Login using Google'),
            ]}
      </CenteredView>
    );
  };
}
