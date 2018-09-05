// @flow

import * as React from 'react';
import {
  HeaderTitle,
  HeaderButton,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import InsuranceTermsPdfScene from '../../InsuranceTermsPdfScene';

type Props = {|
  +navigation: NavigationType,
|};

export default class InsuranceTermsScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack(null);
    }

    return {
      headerLeft: <HeaderButton.CloseModal onPress={goBack} />,
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.more_info.title" />
        </HeaderTitle>
      ),
      headerStyle: {
        backgroundColor: defaultTokens.paletteWhite,
        borderBottomWidth: 0,
      },
    };
  };

  render() {
    return <InsuranceTermsPdfScene navigation={this.props.navigation} />;
  }
}
