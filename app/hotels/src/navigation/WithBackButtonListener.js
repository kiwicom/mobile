// @flow

import * as React from 'react';
import { Platform, BackHandler } from 'react-native';

type Props = {|
  children: React.Node,
  extraCondition?: boolean,
  onClick: () => boolean,
|};

/**
 * This component should wrap the root navigation screen exposed from
 * AppRegistry.registerComponent. Since our app is used inside a native app
 * we need to handle the android back press from the root navigation screen
 * with the correct method to leave react native and go back to native
 */
export default class WithBackButtonListener extends React.Component<Props> {
  backButtonListener = null;

  static defaultProps = {
    extraCondition: true,
  };

  componentDidMount = () => {
    if (
      Platform.OS === 'android' &&
      this.backButtonListener === null &&
      this.props.extraCondition
    ) {
      this.backButtonListener = BackHandler.addEventListener(
        'hardwareBackPress',
        this.props.onClick,
      );
    }
  };
  render = () => {
    return this.props.children;
  };
}
