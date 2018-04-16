// @flow

import * as React from 'react';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  dateTime: ?string,
|};

export default function DateComponent({ dateTime }: Props): React.Node {
  if (!dateTime) {
    return null;
  }

  const date = new DateFormatter(dateTime);
  // Month numeral, day of month, year i.e. 09/04/1986 (Adapts to user device locale).
  return (
    <Text style={style.text}>
      <Translation passThrough={date.format('L')} />
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    color: '#888',
  },
});
