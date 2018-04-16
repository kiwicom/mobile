// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';
import { LinkButton } from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';

type Props = {|
  onLogout: () => void,
|};

function Logout({ onLogout }: Props) {
  return (
    <LinkButton
      onPress={onLogout}
      title={<Translation id="core.authentication.logout" />}
    />
  );
}

export default connect(null, dispatch => ({
  onLogout: () => {
    dispatch({
      type: 'logout',
    });
  },
}))(Logout);
