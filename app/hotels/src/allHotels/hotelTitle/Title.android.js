// @flow

import * as React from 'react';
import { Stars, Text } from '@kiwicom/react-native-app-shared';

import { styles, type Props } from './TitleStylesAndProps';

export default function Title(props: Props) {
  return [
    <Text key="title" style={styles.title}>
      {props.hotelName}{' '}
    </Text>,
    <Text key="title-rating" style={styles.rating}>
      <Stars rating={props.hotelStars} />
    </Text>,
  ];
}
