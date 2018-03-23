// @flow

import * as React from 'react';
import {
  DummyTranslation,
  DateFormatter,
} from '@kiwicom/react-native-app-translations';

type Props = {|
  dateTime: ?string,
|};

export default function DateComponent({ dateTime }: Props): React.Node {
  if (!dateTime) {
    return null;
  }

  const date = DateFormatter(dateTime);
  // Month name, day of month, day of week, year, time, i.e. Thu, Sep 4, 1986 8:30 PM(Adapts to user device locale).
  return <DummyTranslation id={date.format('llll')} />;
}
