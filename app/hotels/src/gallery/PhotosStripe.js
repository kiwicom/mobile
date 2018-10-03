// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { StyleSheet, NetworkImage, Color } from '@kiwicom/mobile-shared';

import PhotosStripeHeader from './PhotosStripeHeader';

type Props = {|
  +hotelName: string,
  +imageUrls: string[],
  +index: number,
  +onClose: () => void,
|};

export default class PhotosStripe extends React.Component<Props> {
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
    <Swiper renderPagination={this.renderPagination} index={this.props.index}>
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
    backgroundColor: Color.black,
  },
  networkImage: {
    flex: 1,
  },
});
