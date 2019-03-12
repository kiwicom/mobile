// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Price } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import SummaryRow from './SummaryRow';
import type { RoomSummary_room as Room } from './__generated__/RoomSummary_room.graphql';
import SummaryButtons from './SummaryButtons';

type Props = {|
  +room: ?Room,
  +goBack: () => void,
|};

export class RoomSummary extends React.Component<Props> {
  calculateSelectedData = () => {
    const availableRooms = this.props.room?.availableRooms;

    if (!availableRooms) {
      return null;
    }
    const positiveSelections = availableRooms.filter(room => {
      const selectedCount = room?.selectedCount ?? 0;
      return selectedCount > 0;
    });

    if (positiveSelections.length === 0) {
      return null;
    }
    const currency =
      positiveSelections[0]?.incrementalPriceWithExtraCharges?.[0]?.price
        ?.currency;
    const amountAndPersons = positiveSelections.reduce(
      (acc, room) => {
        const selectedCount = room?.selectedCount ?? 0;
        const incrementalPrice =
          room?.incrementalPriceWithExtraCharges?.[selectedCount - 1];
        const amount = incrementalPrice?.price?.amount ?? 0;
        const maxPersons = room?.room?.maxPersons ?? 0;
        return {
          amount: acc.amount + amount,
          maxPersons: acc.maxPersons + maxPersons * selectedCount,
          numberOfRooms: acc.numberOfRooms + selectedCount,
        };
      },
      {
        amount: 0,
        maxPersons: 0,
        numberOfRooms: 0,
      },
    );

    return {
      ...amountAndPersons,
      currency,
    };
  };

  render() {
    const bookingPrice = this.calculateSelectedData();
    const amount = bookingPrice?.amount;
    const currency = bookingPrice?.currency;
    const maxPersons = bookingPrice?.maxPersons ?? 0;

    return (
      <>
        {amount != null && currency != null && (
          <View style={styles.container}>
            <View style={styles.content}>
              <SummaryRow
                text={<Translation id="single_hotel.room_summary.total" />}
                price={
                  <Price
                    amount={amount}
                    currency={currency}
                    style={styles.total}
                  />
                }
              />
            </View>
          </View>
        )}
        <SummaryButtons
          amount={amount}
          maxPersons={maxPersons}
          goBack={this.props.goBack}
          rooms={this.props.room}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: 0,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    paddingHorizontal: 17,
  },
  content: {
    paddingVertical: 12,
  },
  total: {
    fontWeight: '800',
  },
});

export default createFragmentContainer(RoomSummary, {
  room: graphql`
    fragment RoomSummary_room on HotelAvailabilityInterface {
      ...SummaryButtons_rooms
      availableRooms {
        selectedCount
        incrementalPriceWithExtraCharges {
          price {
            amount
            currency
          }
        }
        room {
          maxPersons
        }
      }
    }
  `,
});
