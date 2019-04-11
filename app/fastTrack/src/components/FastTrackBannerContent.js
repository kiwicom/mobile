// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  TextButton,
  StyleSheet,
  Icon,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import Services from './Services';
import FastTrackModal from './FastTrackModal';
import type { FastTrackBannerContent_data } from './__generated__/FastTrackBannerContent_data.graphql';

type Props = {|
  +relay: RelayProp,
  +data: FastTrackBannerContent_data,
|};

type State = {|
  +isModalVisible: boolean,
  +documentUrl: string,
|};

class FastTrackBannerContent extends React.Component<Props, State> {
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
          data={this.props.data.fastTrack[0]?.attachments[0]}
        />
      </View>
    );
  }
}

export default createFragmentContainer(FastTrackBannerContent, {
  data: graphql`
    fragment FastTrackBannerContent_data on Ancillaries {
      fastTrack {
        attachments {
          ...FastTrackModal_data
        }
      }
    }
  `,
});

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
