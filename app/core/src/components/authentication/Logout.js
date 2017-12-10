// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@kiwicom/react-native-app-common';

type Props = {|
  onLogout: () => void,
|};

function Logout({ onLogout }: Props) {
  return <Button onPress={onLogout} title="Logout" />;
}

export default connect(null, dispatch => ({
  onLogout: () => {
    dispatch({
      type: 'logout',
    });
  },
}))(Logout);
