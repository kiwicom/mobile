// @flow

import * as React from 'react';
import {
  HeaderTitle,
  HeaderButton,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import InsuranceOverviewSceneContainer from '../../insuranceOverviewScene/InsuranceOverviewSceneContainer';

type Props = {|
  +navigation: NavigationType,
|};

export default class InsuranceOverviewScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack(null);
    }

    return {
      headerLeft: <HeaderButton.CloseModal onPress={goBack} />,
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.title" />
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
      <InsuranceOverviewSceneContainer navigation={this.props.navigation} />
    );
  }
}
