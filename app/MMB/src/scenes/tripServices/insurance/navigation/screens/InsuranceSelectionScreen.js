// @flow

import * as React from 'react';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import InsuranceSelectionSceneContainer from '../../insuranceSelectionScene/InsuranceSelectionSceneContainer';

type Props = {|
  +navigation: NavigationType,
|};

export default class InsuranceSelectionScreen extends React.Component<Props> {
  static navigationOptions = () => {
    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.selection.title" />
        </HeaderTitle>
      ),
      headerStyle: {
        backgroundColor: defaultTokens.paletteWhite,
        borderBottomWidth: 0,
      },
    };
  };

  render() {
    return (
      <InsuranceSelectionSceneContainer navigation={this.props.navigation} />
    );
  }
}
