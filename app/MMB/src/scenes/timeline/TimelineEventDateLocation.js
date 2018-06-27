// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TimelineEventDateLocationContext from '../../context/TimelineEventDateLocationContext';

type Props = {|
  +time: string,
  +place?: string,
|};

export default function TimelineEventDateLocation(props: Props) {
  let destination;
  if (props.place) {
    destination = (
      <TextWithContext>
        <Translation
          id="mmb.booking_timeline.event.in_destination"
          values={{ place: props.place }}
        />
      </TextWithContext>
    );
  }

  return (
    <View style={styles.container}>
      <TextWithContext>
        <Translation passThrough={props.time} />
      </TextWithContext>
      {destination}
    </View>
  );
}

const TextWithContext = ({ children }) => (
  <TimelineEventDateLocationContext.Consumer>
    {({ highlightText }) => (
      <Text style={[styles.text, highlightText && styles.highlightText]}>
        {children}
      </Text>
    )}
  </TimelineEventDateLocationContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 10,
  },
  highlightText: {
    color: Color.red.normal,
  },
});
