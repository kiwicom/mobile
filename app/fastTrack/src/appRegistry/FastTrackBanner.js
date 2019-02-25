// @flow strict

import * as React from 'react';
import {
  SimpleCard,
  Text,
  TextButton,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FastTrackModal from '../components/FastTrackModal';

type Props = {|
  +height: number,
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
      <SimpleCard style={{ height: this.props.height }}>
        <Text style={style.title}>
          <Translation passThrough="Testing new content" />
        </Text>
        <TextButton
          type="primary"
          onPress={this.onOpenModal}
          title={<Translation passThrough="Open Modal" />}
        />
        <FastTrackModal
          isVisible={this.state.isModalVisible}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
        />
      </SimpleCard>
    );
  }
}

export default FastTrackBanner;

const style = StyleSheet.create({
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: defaultTokens.colorTextPrimary,
  },
});
