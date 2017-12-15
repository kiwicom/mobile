// @flow

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { NetworkImage } from '@kiwicom/react-native-app-common';

type Props = {|
  hotelName: string,
  imageUrls: string[],
  index: string,
  goBack: () => void,
|};

export default class PhotosStrip extends React.Component<Props> {
  renderPagination = (index: number, total: number) => {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.headerWrapper}>
        <View style={[styles.titleWrapper, { width }]}>
          <Text style={styles.title}>{this.props.hotelName}</Text>
          <Text style={styles.subTitle}>
            {index + 1} of {total}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={this.props.goBack}>
          <View style={styles.goBackWrapper}>
            <Text style={styles.goBack}>&times;</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render = () => (
    <Swiper renderPagination={this.renderPagination} index={this.props.index}>
      {this.props.imageUrls.map(imageUrl => (
        <View style={styles.slide} key={imageUrl}>
          <NetworkImage
            source={{ uri: imageUrl }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
  },
  goBackWrapper: {
    position: 'absolute',
    top: 5,
    left: 20,
  },
  goBack: {
    color: 'white',
    fontSize: 40,
  },
  titleWrapper: {
    position: 'absolute',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: '#000',
    textShadowRadius: 2,
  },
  subTitle: {
    color: 'grey',
    fontSize: 12,
  },
  slide: {
    flex: 1,
    backgroundColor: '#000',
  },
});
