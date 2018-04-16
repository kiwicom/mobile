// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  photoNumber: number,
  totalPhotos: number,
  hotelName: string,
  onClose: () => void,
|};

export default class PhotosStripeHeader extends React.Component<Props> {
  render = () => (
    <View style={styles.wrapper}>
      <Touchable style={styles.closeButtonWrapper} onPress={this.props.onClose}>
        <Text style={styles.closeButton}>
          <Translation passThrough="&times;" />
        </Text>
      </Touchable>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          <Translation passThrough={this.props.hotelName} />
        </Text>
        <Text style={styles.subTitle}>
          <Translation
            id="hotels.gallery.pagination"
            values={{
              photoNumber: this.props.photoNumber,
              totalPhotos: this.props.totalPhotos,
            }}
          />
        </Text>
      </View>
      <View style={styles.voidRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  closeButtonWrapper: {
    width: 50,
  },
  closeButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
    marginTop: -10,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
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
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
  },
  voidRight: {
    // this adds extra white space to the right so the title is correctly centered
    width: 50,
  },
});
