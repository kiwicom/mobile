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

import type { ETicket as AssetsType } from './__generated__/ETicket.graphql';

type Props = {|
  +data: AssetsType,
|};

class ETicket extends React.Component<Props> {
  openDocument = () => {
    console.warn('TODO:');
  };

  render = () => {
    const isTicketConfirmed = Boolean(idx(this.props.data, _ => _.ticketUrl));
    return (
      <SimpleCard>
        <View style={styles.header}>
          <TextIcon code="J" style={styles.icon} />
          <Text style={styles.headerText}>
            <Translation id="mmb.tickets.e_ticket" />
          </Text>
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
  ETicket,
  graphql`
    fragment ETicket on BookingAssets {
      ticketUrl
    }
  `,
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingTop: 4,
  },
  icon: {
    color: Color.textDark,
    alignSelf: 'center',
    marginEnd: 7,
  },
  headerText: {
    color: Color.textDark,
    fontSize: 16,
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
    backgroundColor: '#b8c1cc',
  },
  buttonText: {
    color: Color.white,
  },
});
