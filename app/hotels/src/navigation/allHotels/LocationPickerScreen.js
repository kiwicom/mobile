// @flow

import * as React from 'react';
import idx from 'idx';
import {
  type NavigationType,
  HeaderButton,
  HeaderTitle,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

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

export default class LocationPickerScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: NavigationProps) => {
    function goBack() {
      navigation.goBack();
    }

    return {
      headerLeft: (
        <HeaderButton.CloseModal
          onPress={goBack}
          text={<Translation id="hotels_search.location_picker.cancel" />}
        />
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
