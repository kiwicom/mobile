// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderButton, type NavigationType } from '@kiwicom/mobile-navigation';

import AddressLocationInput from '../scenes/tripServices/transportation/AddressLocationInput';

type Props = {|
  +navigation: NavigationType,
  +currentAddress: ?string,
|};

export default class AddressPickerScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack();
    }

    function todo() {
      console.warn('todo');
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
      headerTitle: <AddressLocationInput onChangeText={todo} />,
      headerStyle: { paddingBottom: 5 },
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
