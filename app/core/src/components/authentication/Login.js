// @flow

import * as React from 'react';
import { CenteredView } from '@kiwicom/react-native-app-shared';

import EmailLoginForm from './EmailLoginForm';

type Props = {|
  onLogin: (accessToken: string) => void,
|};

export default class Login extends React.Component<Props> {
  handleSuccessfulLogin = (accessToken: string) =>
    this.props.onLogin(accessToken);

  render = () => {
    return (
      <CenteredView>
        <EmailLoginForm key="email" onSuccess={this.handleSuccessfulLogin} />
      </CenteredView>
    );
  };
}
