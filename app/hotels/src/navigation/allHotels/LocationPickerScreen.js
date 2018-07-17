// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  HeaderTitle,
  HeaderButton,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import LocationPicker from '../../allHotels/searchForm/locationPicker/LocationPicker';

export type Location = {|
  id: string,
  name: string,
|};

type Props = {|
  navigation: NavigationType,
|};

type NavigationProps = {|
  cityId: string,
  cityName: string,
  navigation: NavigationType,
|};

const styles = StyleSheet.create({
  confirmButtonText: {
    android: {
      fontWeight: '600',
    },
  },
});

export default class LocationPickerScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: NavigationProps) => {
    function goBack() {
      navigation.goBack();
    }

    return {
      headerLeft: (
        <HeaderButton onPress={goBack}>
          <Text style={styles.confirmButtonText}>
            <Translation id="hotels_search.location_picker.cancel" />
          </Text>
        </HeaderButton>
      ),
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels_search.location_picker.header" />
        </HeaderTitle>
      ),
      gesturesEnabled: false,
    };
  };

  closeModal = () => {
    this.props.navigation.goBack();
  };

  render = () => (
    <LocationPicker
      closeModal={this.closeModal}
      location={idx(this.props.navigation, _ => _.state.params.location)}
    />
  );
}
