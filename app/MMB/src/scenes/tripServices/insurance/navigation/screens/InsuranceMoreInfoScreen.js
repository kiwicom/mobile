// @flow

import * as React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import MoreInfoScene from '../../moreInfoScene/MoreInfoScene';

type Props = {|
  +navigation: NavigationType,
|};

export default class InsuranceMoreInfoScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack(null);
    }

    return {
      headerLeft: (
        <HeaderBackButton
          tintColor={defaultTokens.paletteProductNormal}
          onPress={goBack}
        />
      ),
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
    return <MoreInfoScene navigation={this.props.navigation} />;
  }
}
