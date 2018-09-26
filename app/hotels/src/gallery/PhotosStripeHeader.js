// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +photoNumber: number,
  +totalPhotos: number,
  +hotelName: string,
  +onClose: () => void,
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
    color: defaultTokens.paletteWhite,
    fontSize: 40,
    lineHeight: 40,
    marginTop: -10,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: defaultTokens.paletteWhite,
    fontSize: 12,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: defaultTokens.paletteInkDark,
    textShadowRadius: 2,
  },
  subTitle: {
    textAlign: 'center',
    color: defaultTokens.paletteInkLighter,
    fontSize: 12,
  },
  voidRight: {
    // this adds extra white space to the right so the title is correctly centered
    width: 50,
  },
});
