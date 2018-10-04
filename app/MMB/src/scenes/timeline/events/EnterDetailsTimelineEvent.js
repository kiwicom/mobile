// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { Translation, DateUtils } from '@kiwicom/mobile-localization';
import { TextIcon, TextButton, StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import Title from '../MainContentTitle';
import Note from '../MainContentNote';
import type { EnterDetailsTimelineEvent as EnterDetailsTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: EnterDetailsTimelineEventType,
  +navigation: NavigationType,
|};

class EnterDetailsTimelineEvent extends React.Component<Props> {
  handleAddDetails = () => {
    this.props.navigation.navigate('TravelDocumentScreen');
  };

  render() {
    const timestamp = idx(this.props, _ => _.data.timestamp) || Date.now();
    // Trick to have the event not show as past event
    const almostMidnight = DateUtils.latestTimeOfDay(new Date(timestamp));
    return (
      <TimelineEvent
        displayTime={false}
        timestamp={almostMidnight}
        iconVertLines={<TimelineEventIcon icon={<TextIcon code="v" />} />}
        mainContent={
          <View style={styles.container}>
            <Title>
              <Translation id="mmb.booking_timeline.event.enter_details.title" />
            </Title>
            <Note>
              <Translation id="mmb.booking_timeline.event.enter_details.note" />
            </Note>
            <View style={styles.button}>
              <TextButton
                title={
                  <Translation id="mmb.booking_timeline.event.enter_details.button.title" />
                }
                onPress={this.handleAddDetails}
              />
            </View>
          </View>
        }
      />
    );
  }
}

export default createFragmentContainer(
  withNavigation(EnterDetailsTimelineEvent),
  graphql`
    fragment EnterDetailsTimelineEvent on EnterDetailsTimelineEvent {
      timestamp
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  button: {
    flex: 1,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
});
