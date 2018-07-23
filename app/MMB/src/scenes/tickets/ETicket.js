// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  TextIcon,
  SimpleCard,
  StyleSheet,
  Text,
  Color,
  Button,
} from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { withNavigation } from 'react-navigation';
import type {
  NavigationType,
  RouteNamesType,
} from '@kiwicom/mobile-navigation';

import type { ETicket as AssetsType } from './__generated__/ETicket.graphql';
import TicketHeader from './components/TicketHeader';

type Props = {|
  +data: AssetsType,
  +navigation: NavigationType,
|};

class ETicket extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  openDocument = () => {
    this.navigate('mmb.tickets.e_ticket', {
      ticketUrl: idx(this.props.data, _ => _.ticketUrl),
    });
  };

  render = () => {
    const isTicketConfirmed = Boolean(idx(this.props.data, _ => _.ticketUrl));
    return (
      <SimpleCard style={styles.card}>
        <View style={styles.header}>
          <TicketHeader
            icon={<TextIcon code="J" />}
            title={<Translation id="mmb.tickets.e_ticket" />}
          />
        </View>
        <Translation
          id={
            isTicketConfirmed
              ? 'mmb.tickets.print_eticket_and_bring_to_airport'
              : 'mmb.tickets.available_when_booking_confirmed'
          }
        />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={this.openDocument}
            disabled={!isTicketConfirmed}
            style={[styles.button, !isTicketConfirmed && styles.disabled]}
          >
            <Text style={styles.buttonText}>
              <Translation
                id={
                  isTicketConfirmed
                    ? 'mmb.tickets.open'
                    : 'mmb.tickets.not_available_yet'
                }
              />
            </Text>
          </Button>
        </View>
      </SimpleCard>
    );
  };
}

export default createFragmentContainer(
  withNavigation(ETicket),
  graphql`
    fragment ETicket on BookingAssets {
      ticketUrl
    }
  `,
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 12,
    paddingTop: 4,
  },
  buttonWrapper: {
    marginTop: 21,
  },
  button: {
    backgroundColor: Color.brand,
    height: 44,
    borderRadius: 4,
  },
  disabled: {
    backgroundColor: Color.disabled,
  },
  buttonText: {
    color: Color.white,
  },
});
