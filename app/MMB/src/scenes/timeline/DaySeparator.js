// @flow

import * as React from 'react';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import {
  Translation,
  DateFormatter,
  DateUtils,
} from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TimelineRow from './TimelineRow';

type Props = {|
  +date: Date,
|};

const DaySeparator = (props: Props) => {
  const { date } = props;
  let translatedDay = null;
  if (DateUtils.diffInDays(date, new Date()) === 0) {
    translatedDay = (
      <Translation id="mmb.booking_timeline.today" textTransform="uppercase" />
    );
  } else {
    translatedDay = (
      <Translation
        passThrough={DateFormatter(new Date(date)).formatToDate()}
        textTransform="uppercase"
      />
    );
  }
  return (
    <TimelineRow
      rowStyle={styles.container}
      rightColumn={<Text style={styles.date}>{translatedDay}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Color.backgroundGray, // TODO: Consult designer
  },
  date: {
    color: defaultTokens.paletteInkLight,
    fontWeight: 'bold',
  },
});

export default DaySeparator;
