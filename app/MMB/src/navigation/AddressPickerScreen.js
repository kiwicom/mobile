// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderButton, type NavigationType } from '@kiwicom/mobile-navigation';

type Props = {|
  +navigation: NavigationType,
  +currentAddress: ?string,
|};

export default class AddressPickerScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack();
    }

    return {
      headerLeft: (
        <HeaderButton.CloseModal
          onPress={goBack}
          text={
            <Translation id="mmb.trip_services.transportation.address_picker.cancel_button" />
          }
        />
      ),
      headerTitle: (
        <View>
          <Translation passThrough="TODO" />
        </View>
      ),
    };
  };
  render() {
    return (
      <View>
        <Translation passThrough="TODO" />
      </View>
    );
  }
}
