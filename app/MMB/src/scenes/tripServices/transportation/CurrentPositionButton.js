// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import isEqual from 'react-fast-compare';
import {
  StyleSheet,
  TextIcon,
  withGeolocationContext,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: (currentLocation: Coordinate) => void,
  +lat: number | null,
  +lng: number | null,
  +canGetUserLocation: boolean,
  +updateGeolocation: (failSilently: boolean) => void,
|};

type State = {|
  click: boolean,
|};

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

class CurrentPositionButton extends React.Component<Props, State> {
  state = {
    click: false,
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const prevCoordsAvailable = prevProps.lat != null && prevProps.lng != null;
    const wasClicked = prevState.click != this.state.click;
    const newCanGetUserLocation = this.props.canGetUserLocation;

    const firstTime = !prevCoordsAvailable;
    const otherTime =
      wasClicked && prevCoordsAvailable && newCanGetUserLocation;

    if (
      (firstTime || otherTime) &&
      this.props.lat != null &&
      this.props.lng != null
    ) {
      this.props.onPress({
        latitude: this.props.lat,
        longitude: this.props.lng,
      });
    }
  }

  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    const isPropsEqual = isEqual(nextProps, this.props);
    const isStateEqual = isEqual(nextState, this.state);

    return !isPropsEqual || !isStateEqual;
  };

  getLocation = () => {
    this.props.updateGeolocation(false);
    this.setState(state => ({ click: !state.click }));
  };

  render() {
    return (
      <View style={styles.roundButton}>
        <TouchableWithoutFeedback onPress={this.getLocation}>
          <View>
            <TextIcon code="&quot;" style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
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
    fontSize: 20,
  },
});

export default withGeolocationContext(CurrentPositionButton);
