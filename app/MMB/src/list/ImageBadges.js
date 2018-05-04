// @flow

import * as React from 'react';
import { AdaptableBadge, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  status: string,
  bookingId: string,
|};

export default function ImageBadges(props: Props) {
  let statusBadge = null;
  switch (props.status) {
    case 'REFUNDED':
      statusBadge = (
        <AdaptableBadge
          translation={<Translation id="mmb.booking_state.refunded" />}
          style={styles.refundedBadge}
          textStyle={styles.badgeText}
        />
      );
      break;
    case 'CONFIRMED':
      statusBadge = (
        <AdaptableBadge
          translation={<Translation id="mmb.booking_state.confirmed" />}
          style={styles.confirmBadge}
          textStyle={styles.badgeText}
        />
      );
      break;
    case 'CLOSED':
      statusBadge = (
        <AdaptableBadge
          translation={<Translation id="mmb.booking_state.in_process" />}
          style={styles.inProcessBadge}
          textStyle={styles.badgeText}
        />
      );
      break;
    default:
      break;
  }
  return (
    <React.Fragment>
      {statusBadge}
      <AdaptableBadge
        translation={<Translation passThrough={props.bookingId} />}
        style={styles.bookingIdBadge}
        textStyle={styles.badgeText}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  confirmBadge: {
    backgroundColor: '#33bd1b',
  },
  refundedBadge: {
    backgroundColor: Color.textDark,
  },
  inProcessBadge: {
    backgroundColor: '#f9971e', // TODO: Replace with real color when provided. Missing in desing
  },
  bookingIdBadge: {
    backgroundColor: Color.textDark,
  },
  badgeText: {
    fontSize: 10,
    color: Color.white,
    padding: 2.5,
  },
});
