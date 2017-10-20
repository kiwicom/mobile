// @flow

import * as React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import CenteredView from '../../components/visual/view/CenteredView';

type Props = {
  onLogout: () => void,
};

const Profile = class Profile extends React.PureComponent<Props, {}> {
  render = () => {
    return (
      <CenteredView>
        <Text>TODO: basic user info</Text>
        <Text>TODO: login if not logged</Text>
        <Button
          onPress={() => {
            this.props.onLogout();
          }}
          title="Logout"
        />
      </CenteredView>
    );
  };
};

export default connect(null, dispatch => ({
  onLogout: () => {
    dispatch({
      type: 'logout',
    });
  },
}))(Profile);
