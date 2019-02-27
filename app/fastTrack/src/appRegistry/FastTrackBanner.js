// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, TextButton, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FastTrackModal from '../components/FastTrackModal';
import Services from '../components/Services';

type Props = {|
  +bookingId: number,
|};

type State = {|
  +isModalVisible: boolean,
|};

class FastTrackBanner extends React.Component<Props, State> {
  state = {
    isModalVisible: false,
  };

  onOpenModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Icon name="deals" color={defaultTokens.colorIconSecondary} />
          <Text style={style.title}>
            <Translation passThrough="Milano Bergamo Stopover Bundle" />
          </Text>
        </View>
        <Text style={style.description}>
          <Translation passThrough="VIP treatment is waiting for you at Milan Bergamo Airport with Fast Track and baggage assistance." />
        </Text>
        <Services />
        <TextButton
          type="primary"
          onPress={this.onOpenModal}
          title={<Translation passThrough="Show QR Code" />}
        />
        <FastTrackModal
          isVisible={this.state.isModalVisible}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
        />
      </View>
    );
  }
}

export default FastTrackBanner;

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 16,
    marginStart: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultTokens.paletteInkDark,
  },
  description: {
    fontSize: 14,
    lineHeight: 19,
    color: defaultTokens.paletteInkNormal,
    marginBottom: 24,
  },
});
