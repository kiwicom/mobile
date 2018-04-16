// @flow

import * as React from 'react';
import {
  Text,
  Touchable,
  StyleSheet,
  Color,
} from '@kiwicom/react-native-app-shared';
import {
  type NavigationType,
  HeaderTitle,
} from '@kiwicom/react-native-app-navigation';
import { Translation } from '@kiwicom/react-native-app-localization';
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
  cancelButton: {
    padding: 8,
  },
  headerButtonText: {
    fontSize: 17,
    color: Color.white,
    lineHeight: 20,
    ios: {
      fontFamily: 'SFProText-Regular',
    },
  },
  confirmButtonText: {
    ios: {
      fontFamily: 'SFProText-Semibold',
    },
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

    function headerLeft() {
      return (
        <Touchable
          borderlessRipple={true}
          onPress={goBack}
          style={styles.cancelButton}
        >
          <Text style={[styles.headerButtonText, styles.confirmButtonText]}>
            <Translation id="hotels_search.location_picker.cancel" />
          </Text>
        </Touchable>
      );
    }

    return {
      headerLeft: headerLeft(),
      title: (
        <HeaderTitle>
          <Translation id="hotels_search.location_picker.header" />
        </HeaderTitle>
      ),
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
