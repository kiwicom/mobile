// @flow strict

import * as React from 'react';
import { AdaptableBadge, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { StatusBadge as StatusBadgeType } from './__generated__/StatusBadge.graphql';

type Props = {|
  +data: StatusBadgeType,
|};

const StatusBadge = (props: Props) => {
  const status = idx(props.data, _ => _.status) || '';
  const isPastBooking = idx(props.data, _ => _.isPastBooking);

  switch (status) {
    case 'REFUNDED':
      return (
        <AdaptableBadge
          translation={<Translation id="mmb.booking_state.refunded" />}
          style={styles.refundedBadge}
          textStyle={styles.badgeText}
        />
      );
    case 'CONFIRMED':
      return (
        <AdaptableBadge
          translation={
            <Translation
              id={
                isPastBooking
                  ? 'mmb.booking_state.confirmed.travelled'
                  : 'mmb.booking_state.confirmed'
              }
            />
          }
          style={styles.confirmBadge}
          textStyle={styles.badgeText}
        />
      );
    case 'CLOSED':
      return (
        <AdaptableBadge
          translation={<Translation id="mmb.booking_state.in_process" />}
          style={styles.inProcessBadge}
          textStyle={styles.badgeText}
        />
      );
    default:
      return null;
  }
};

export default createFragmentContainer(
  StatusBadge,
  graphql`
    fragment StatusBadge on BookingInterface {
      status
      isPastBooking
    }
  `,
);

const styles = StyleSheet.create({
  confirmBadge: {
    backgroundColor: 'rgba(51, 189, 27, 0.6)',
  },
  refundedBadge: {
    backgroundColor: 'rgba(48, 54, 61, 0.6)',
  },
  inProcessBadge: {
    backgroundColor: 'rgba(249, 151, 30, 0.6)', // TODO: Replace with real color when provided - missing in design.
  },
  badgeText: {
    fontSize: 10,
    color: Color.white,
    padding: 2.5,
  },
});
