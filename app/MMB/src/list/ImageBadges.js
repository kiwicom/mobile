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
    backgroundColor: 'rgba(51, 189, 27, 0.7)',
  },
  refundedBadge: {
    backgroundColor: 'rgba(48, 54, 61, 0.7)',
  },
  inProcessBadge: {
    backgroundColor: 'rgba(249, 151, 30, 0.7)', // TODO: Replace with real color when provided - missing in design.
  },
  bookingIdBadge: {
    backgroundColor: 'rgba(48, 54, 61, 0.7)',
  },
  badgeText: {
    fontSize: 10,
    color: Color.white,
    padding: 2.5,
  },
});
