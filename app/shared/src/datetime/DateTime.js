// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/react-native-app-translations';

import Text from '../Text';

type Props = {|
  dateTime: ?string,
|};

export default function DateComponent({ dateTime }: Props): React.Node {
  if (!dateTime) {
    return null;
  }
  const date = DateFormatter(dateTime);
  // Month name, day of month, day of week, year, time, i.e. Thu, Sep 4, 1986 8:30 PM(Adapts to user device locale).
  return <Text>{date.format('llll')}</Text>;
}
