// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Modal,
  StyleSheet,
  TextInput,
  TextButton,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';
import debounce from 'lodash/debounce';

import HotelCityQuery from './HotelCityQuery';

type Props = {|
  +onSave: () => void,
  +onClose: () => void,
  +isVisible: boolean,
  +cityName: string,
|};

type State = {|
  cityName: string,
  query: string,
|};

export default class PlacepickerModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cityName: props.cityName,
      query: props.cityName,
    };
  }

  onChange = (cityName: string) => {
    this.setState({ cityName }, this.setQuery);
  };

  setQuery = debounce(() => {
    this.setState(state => ({
      query: state.cityName,
    }));
  }, 250);

  render() {
    const { isVisible, onClose } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onRequestClose={onClose}
        style={styles.modal}
      >
        <SafeAreaView style={styles.container}>
          <View style={[styles.container, styles.inner]}>
            <Translation passThrough="Search for city" />
            <TextInput
              value={this.state.cityName}
              onChangeText={this.onChange}
            />
            <View style={styles.cityList}>
              <HotelCityQuery
                query={this.state.query}
                onPress={this.props.onSave}
              />
            </View>
          </View>
          <View>
            <TextButton
              type="secondary"
              title={<Translation passThrough="Close" />}
              onPress={this.props.onClose}
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
  inner: {
    padding: 10,
  },
  cityList: {
    marginTop: 10,
    flex: 1,
  },
});
