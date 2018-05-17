// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';

function DateTime(props) {
  const localDateTime = new Date(props.data.localTime);

  const date = DateFormatter(localDateTime).formatToDate();
  const time = DateFormatter(localDateTime).formatToTime();

  return (
    <React.Fragment>
      <Text style={styleSheet.date}>
        <Translation passThrough={date} />
      </Text>
      <Text style={styleSheet.time}>
        <Translation passThrough={time} />
      </Text>
    </React.Fragment>
  );
}

export default createFragmentContainer(
  DateTime,
  graphql`
    fragment DateTime on RouteStop {
      localTime
    }
  `,
);

const styleSheet = StyleSheet.create({
  date: {
    fontSize: 12,
    marginVertical: 5,
  },
  time: {
    fontSize: 10,
    color: Color.textLight,
  },
});
