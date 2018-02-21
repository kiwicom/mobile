// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { StyleSheet, NetworkImage } from '@kiwicom/react-native-app-shared';

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

export default class PhotosStripe extends React.Component<Props, State> {
  state = {
    key: Math.random(),
  };

  componentDidMount = () => {
    if (Platform.OS === 'android') {
      // we need to trigger a re-render on Android to show the photo
      // see: https://github.com/leecade/react-native-swiper/issues/227
      setTimeout(() =>
        this.setState({
          key: Math.random(),
        }),
      );
    }
  };

  renderPagination = (index: number, total: number) => {
    return (
      <View style={styles.paginationWrapper}>
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
  paginationWrapper: {
    position: 'absolute',
    top: 40,
    width: '100%',
  },
  slide: {
    flex: 1,
    backgroundColor: '#000',
  },
  networkImage: {
    flex: 1,
  },
});
