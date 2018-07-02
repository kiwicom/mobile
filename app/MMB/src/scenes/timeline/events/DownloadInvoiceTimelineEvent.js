// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, TextButton, TextIcon } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Note from '../MainContentNote';
import Title from '../MainContentTitle';
import Invoice from '../../../components/Invoice';
import type { DownloadInvoiceTimelineEvent as DownloadInvoiceTimelineEventType } from './__generated__/DownloadInvoiceTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: DownloadInvoiceTimelineEventType,
  +navigation: NavigationType,
|};

function renderNote(
  disabled: boolean,
  numberPassengers: ?number,
  route: ?string,
): React.Element<typeof Translation> {
  let id = 'mmb.booking_timeline.event.download_invoice.note_not_available';
  if (!disabled && numberPassengers) {
    id = 'mmb.booking_timeline.event.download_invoice.note_singular';
    if (numberPassengers > 1) {
      id = 'mmb.booking_timeline.event.download_invoice.note_plural';
    }
  }
  return (
    <Translation
      id={id}
      values={{
        route: route,
        passengers: numberPassengers,
      }}
    />
  );
}

function renderLeg(leg) {
  const departureCity = idx(leg, _ => _.departure.airport.city.name);
  const arrivalCity = idx(leg, _ => _.arrival.airport.city.name);
  if (departureCity && arrivalCity) {
    return departureCity + ' - ' + arrivalCity;
  }
  return '';
}

function renderLegs(legs) {
  if (!legs) {
    return '';
  }
  return legs.map(renderLeg).join(', ');
}

class DownloadInvoiceTimelineEvent extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
    });
  };

  handleOpenInvoice = () => {
    this.navigate('mmb.timeline.invoice');
  };

  render() {
    const timestamp = idx(this.props, _ => _.data.timestamp);
    const invoiceUrl = idx(this.props, _ => _.data.invoiceUrl);
    const numberPassengers = idx(this.props, _ => _.data.numberPassengers);
    const legs = idx(this.props, _ => _.data.legs);
    const disabled = !invoiceUrl;

    const route = renderLegs(legs);
    const note = renderNote(disabled, numberPassengers, route);

    return (
      <TimelineEvent
        timestamp={timestamp}
        displayTime={false}
        iconVertLines={
          <TimelineEventIcon icon={<TextIcon code="&#xe011;" />} />
        }
        mainContent={
          <View style={styles.container}>
            <Title>
              <Translation id="mmb.booking_timeline.event.download_invoice.title" />
            </Title>
            <Note>{note}</Note>
            <View style={styles.button}>
              <TextButton
                disabled={disabled}
                title={
                  <Translation id="mmb.booking_timeline.event.download_invoice.button.title" />
                }
                onPress={this.handleOpenInvoice}
              />
            </View>
          </View>
        }
      />
    );
  }
}

export default createFragmentContainer(
  withNavigation(DownloadInvoiceTimelineEvent),
  graphql`
    fragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {
      timestamp
      invoiceUrl
      numberPassengers
      legs {
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

export const TimelineInvoiceSubmenuItems = {
  'mmb.timeline.invoice': {
    screen: function TimelineSubmenuOpenInvoice() {
      return <Invoice />;
    },
  },
};
