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
  testID?: string,
|};

export default class PhotosStripe extends React.Component<Props> {
  // Necessary to prevent the Swiper component to be re-rendered and re-initialise the index if device rotates
  shouldComponentUpdate() {
    return false;
  }

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
      testID={this.props.testID}
    >
      {this.props.imageUrls.map((imageUrl, index) => (
        <View
          style={styles.slide}
          key={imageUrl}
          testID={`photosStripeImage-${index}`}
        >
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
