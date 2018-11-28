// @flow

import * as React from 'react';
import { View, Linking } from 'react-native';
import {
  StyleSheet,
  TextIcon,
  withGeolocationContext,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Alert } from '@kiwicom/mobile-localization';

type Props = {|
  +onPress: (currentLocation: Coordinate) => void,
  +updateGeolocation: (
    dealWithLocation?: (coordinate: Coordinate) => void,
    onError?: () => void,
  ) => void,
|};

type State = {|
  click: boolean,
|};

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

class CurrentPositionButton extends React.Component<Props, State> {
  openSettings = () => {
    Linking.openURL('app-settings:');
  };

  alertOpenSettings = () => {
    Alert.translatedAlert(
      undefined,
      {
        id: 'mmb.trip_services.transportation.map.current_position_alert',
      },
      [
        {
          text: { id: 'mmb.alert.button.ok' },
          undefined,
          style: 'default',
        },
        {
          text: { id: 'mmb.alert.button.settings' },
          onPress: this.openSettings,
          style: 'default',
        },
      ],
    );
  };

  getLocation = () => {
    this.props.updateGeolocation(this.props.onPress, this.alertOpenSettings);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.getLocation}>
        <View style={styles.roundButton}>
          <View>
            <TextIcon code='"' style={styles.icon} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  roundButton: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderColor: defaultTokens.paletteWhite,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: { height: 0, width: 0 },
    position: 'absolute',
    bottom: 80,
    end: 20,
  },
  icon: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 21,
  },
});

export default withGeolocationContext(CurrentPositionButton);
