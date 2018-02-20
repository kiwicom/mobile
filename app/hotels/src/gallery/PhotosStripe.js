// @flow

import * as React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { NetworkImage } from '@kiwicom/react-native-app-shared';

import PhotosStripeHeader from './PhotosStripeHeader';

type Props = {|
  hotelName: string,
  imageUrls: string[],
  index: number,
  onClose: () => void,
|};

type State = {|
  key: number,
|};

/* 
  Need to trigger a re-render on android to show photo
  https://github.com/leecade/react-native-swiper/issues/227
*/
export default class PhotosStripe extends React.Component<Props, State> {
  state = {
    key: Math.random(),
  };

  componentDidMount = () => {
    if (Platform.OS === 'android') {
      setTimeout(() => this.setState({ key: Math.random() }));
    }
  };

  renderPagination = (index: number, total: number) => {
    return (
      <View style={{ position: 'absolute', top: 20, width: '100%' }}>
        <PhotosStripeHeader
          photoNumber={index + 1}
          totalPhotos={total}
          hotelName={this.props.hotelName}
          onClose={this.props.onClose}
        />
      </View>
    );
  };

  render = () => (
    <Swiper
      renderPagination={this.renderPagination}
      index={this.props.index}
      key={this.state.key}
    >
      {this.props.imageUrls.map(imageUrl => (
        <View style={styles.slide} key={imageUrl}>
          <NetworkImage
            source={{ uri: imageUrl }}
            style={styles.networkImage}
            resizeMode="contain"
          />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#000',
  },
  networkImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
