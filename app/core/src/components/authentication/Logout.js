// @flow

import * as React from 'react';
import { connect } from '@kiwicom/mobile-redux';
import { LinkButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
