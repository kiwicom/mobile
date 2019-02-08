// @noflow

import * as React from 'react';
// eslint-disable-next-line
import { View } from 'react-native';

import {
  SimpleCard,
  Text,
  CenteredView,
  TextButton,
  Modal,
} from '@kiwicom/mobile-shared';

// This will be prop types passed from native app
type Props = {|
  +height: number,
|};

type State = {|
  +isModalVisible: boolean,
|};

class FastTrackBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

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

  renderModal = () => (
    <Modal
      isVisible={this.state.isModalVisible}
      onRequestClose={this.onCloseModal}
      testId="fastTrackBanner"
    >
      <View>
        <Text
          style={{
            marginBottom: 16,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#006dc7',
          }}
        >
          This is modal content.
        </Text>
        <TextButton
          style={{ flexBasis: 100 }}
          type="secondary"
          onPress={this.onCloseModal}
          title="Close modal"
        />
      </View>
    </Modal>
  );

  render() {
    return (
      <SimpleCard style={{ height: this.props.height }}>
        <React.Fragment>
          <Text
            style={{
              marginBottom: 16,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#00a991',
            }}
          >
            Fast Track Banner test
          </Text>
          <TextButton
            type="primary"
            onPress={this.onOpenModal}
            title="Open Modal"
          />
          {this.renderModal()}
        </React.Fragment>
      </SimpleCard>
    );
  }
}

export default FastTrackBanner;
