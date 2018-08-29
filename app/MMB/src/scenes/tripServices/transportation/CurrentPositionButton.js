// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import isEqual from 'react-fast-compare';
import { StyleSheet, TextIcon, GetLocation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: (currentLocation: Coordinate) => void,
|};

type State = {|
  getLocation: boolean,
|};

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

export default class CurrentPositionButton extends React.Component<
  Props,
  State,
> {
  state = {
    getLocation: false,
  };

  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    const isPropsEqual = isEqual(nextProps, this.props);
    const isStateEqual = isEqual(nextState, this.state);

    return !isPropsEqual || !isStateEqual;
  };

  getLocation = () => {
    this.setState({
      getLocation: true,
    });
  };

  reset = () => {
    this.setState({
      getLocation: false,
    });
  };

  render() {
    return (
      <View style={styles.roundButton}>
        <TouchableWithoutFeedback onPress={this.getLocation}>
          <View>
            <TextIcon code="&quot;" style={styles.icon} />
            <GetLocation
              getLocation={this.state.getLocation}
              dealWithLocation={this.props.onPress}
              failSilently={false}
              onPressOK={this.reset}
            />
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
