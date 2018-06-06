// @flow

import * as React from 'react';

import EmailLoginForm from './EmailLoginForm';

type Props = {|
  +onLogin: (accessToken: string) => void,
|};

export default class Login extends React.Component<Props> {
  handleSuccessfulLogin = (accessToken: string) => {
    this.props.onLogin(accessToken);
  };

  render = () => {
    return (
      <EmailLoginForm key="email" onSuccess={this.handleSuccessfulLogin} />
    );
  };
}
