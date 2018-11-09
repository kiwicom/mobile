// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, TextButton, TextIcon } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  type RouteNamesType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Title from '../MainContentTitle';
import Note from '../MainContentNote';
import type { DownloadBoardingPassTimelineEvent as DownloadBoardingPassTimelineEventType } from './__generated__/DownloadBoardingPassTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: DownloadBoardingPassTimelineEventType,
  +navigation: NavigationType,
|};

class DownloadBoardingPassTimelineEvent extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  handleOpenBoardingPass = () => {
    const { data } = this.props;
    this.navigate('mmb.tickets.boarding_pass', {
      boardingPassUrl: data.leg?.boardingPass?.boardingPassUrl,
      flightNumber: data.leg?.boardingPass?.flightNumber,
    });
  };

  render() {
    const { data } = this.props;
    const timestamp = data.timestamp;
    const boardingPassUrl = data.leg?.boardingPass?.boardingPassUrl;
    const origin = data.leg?.departure?.airport?.city?.name;
    const destination = data.leg?.arrival?.airport?.city?.name;
    const disabled = !boardingPassUrl;

    let noteContent = null;
    if (origin && destination) {
      noteContent = <Translation passThrough={`${origin} - ${destination}`} />;
    }
    if (disabled) {
      noteContent = (
        <Translation id="mmb.booking_timeline.event.download_boarding_pass.note_not_available" />
      );
    }

    const buttonTitle = disabled ? (
      <Translation id="mmb.booking_timeline.event.download_boarding_pass.button.title.not_available" />
    ) : (
      <Translation id="mmb.booking_timeline.event.download_boarding_pass.button.title" />
    );

    return (
      <TimelineEvent
        timestamp={timestamp}
        displayTime={false}
        iconVertLines={<TimelineEventIcon icon={<TextIcon code="6" />} />}
        mainContent={
          <View style={styles.container}>
            <Title>
              <Translation id="mmb.booking_timeline.event.download_boarding_pass.title" />
            </Title>
            <Note>{noteContent}</Note>
            <View style={styles.button}>
              <TextButton
                disabled={disabled}
                title={buttonTitle}
                onPress={this.handleOpenBoardingPass}
              />
            </View>
          </View>
        }
      />
    );
  }
}

export default createFragmentContainer(
  withNavigation(DownloadBoardingPassTimelineEvent),
  graphql`
    fragment DownloadBoardingPassTimelineEvent on DownloadBoardingPassTimelineEvent {
      timestamp
      leg {
        departure {
          airport {
            city {
              name
            }
          }
        }
        arrival {
          airport {
            city {
              name
            }
          }
        }
        boardingPass {
          flightNumber
          boardingPassUrl
        }
      }
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
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
});
