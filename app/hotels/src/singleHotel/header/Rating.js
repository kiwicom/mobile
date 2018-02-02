// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { Stars } from '@kiwicom/react-native-app-shared';

type Props = {|
  stars?: ?number,
  score?: ?number,
  description?: ?string,
|};

export default function Rating({ stars, score, description }: Props) {
  const reviewDelimiter = score && description ? ' ' : '';
  const review = `${score || ''}${reviewDelimiter}${description || ''}`;
  const starsDelimiter = stars && (score || description) ? ' - ' : '';

  return (
    <Text>
      <Stars rating={stars || 0} />
      {starsDelimiter}
      {review}
    </Text>
  );
}
