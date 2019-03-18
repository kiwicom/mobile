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
  +requester: (url: string) => Promise<Response>,
|};

type State = {|
  +isModalVisible: boolean,
  +documentUrl: string,
|};

class FastTrackBanner extends React.Component<Props, State> {
  state = {
    isModalVisible: false,
    documentUrl: '',
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
            <Translation id="fast_track.banner.title" />
          </Text>
        </View>
        <Text style={style.description}>
          <Translation id="fast_track.banner.description" />
        </Text>
        <Services />
        <TextButton
          type="primary"
          onPress={this.onOpenModal}
          title={<Translation id="fast_track.banner.show_qr_button" />}
        />
        <FastTrackModal
          documentUrl={this.state.documentUrl}
          isVisible={this.state.isModalVisible}
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
