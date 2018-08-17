// @flow strict

import * as React from 'react';
import { AdaptableBadge, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { StatusBadge as StatusBadgeType } from './__generated__/StatusBadge.graphql';

type Props = {|
  +data: StatusBadgeType,
|};

const StatusBadge = (props: Props) => {
  const status = idx(props.data, _ => _.status) || '';
  const isPastBooking = idx(props.data, _ => _.isPastBooking);

  let renderStatus;
  switch (status) {
    case 'CLOSED': {
      renderStatus = {
        translationId: 'mmb.status.closed',
        style: styles.redBadge,
      };
      break;
    }

    case 'CONFIRMED': {
      renderStatus = {
        translationId: isPastBooking
          ? 'mmb.status.travelled'
          : 'mmb.status.confirmed',
        style: styles.greenBadge,
      };
      break;
    }

    case 'REFUNDED': {
      renderStatus = {
        translationId: 'mmb.status.refunded',
        style: styles.blackBadge,
      };
      break;
    }
    default: {
      renderStatus = null;
    }
  }
  if (renderStatus) {
    return (
      <AdaptableBadge
        translation={<Translation id={renderStatus.translationId} />}
        style={[styles.badge, renderStatus.style]}
        textStyle={styles.badgeText}
      />
    );
  }
  return null;
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
  badge: {
    opacity: 0.7,
  },
  greenBadge: {
    backgroundColor: defaultTokens.paletteGreenNormal,
  },
  blackBadge: {
    backgroundColor: Color.black, // TODO: Consult designer
  },
  redBadge: {
    backgroundColor: defaultTokens.paletteRedNormal,
  },
  badgeText: {
    fontSize: 10,
    color: defaultTokens.paletteWhite,
    padding: 2.5,
  },
});
