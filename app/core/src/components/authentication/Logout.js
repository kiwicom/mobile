// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { LinkButton } from '@kiwicom/react-native-app-common';

type Props = {|
  onLogout: () => void,
|};

function Logout({ onLogout }: Props) {
  return <LinkButton onPress={onLogout} title="Logout" />;
}

export default connect(null, dispatch => ({
  onLogout: () => {
    dispatch({
      type: 'logout',
    });
  },
}))(Logout);
