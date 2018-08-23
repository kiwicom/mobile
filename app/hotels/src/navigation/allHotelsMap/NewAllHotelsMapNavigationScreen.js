// @flow strict

import * as React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { type NavigationType } from '@kiwicom/mobile-navigation';

import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';

type Props = {|
  +navigation: NavigationType,
|};

export default class NewAllHotelsMapNavigationScreen extends React.Component<
  Props,
> {
  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerLeft: (
        <HeaderBackButton
          tintColor={defaultTokens.paletteProductNormal}
          onPress={goBack}
        />
      ),
    };
  };

  render = () => <NewAllHotelsMap />;
}
