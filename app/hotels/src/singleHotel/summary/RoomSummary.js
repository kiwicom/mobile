// @flow

import * as React from 'react';
import {
  StyleSheet,
  Price,
  BottomSheetHandle,
  VerticalSwipeResponder,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import memoize from 'memoize-one';
import { Decimal } from 'decimal.js-light';

import SummaryRow from './SummaryRow';
import type { RoomSummary_room as Room } from './__generated__/RoomSummary_room.graphql';
import SummaryButtons from './SummaryButtons';
import ExtraCharges from './ExtraCharges';

type Props = {|
  +room: ?Room,
  +goBack: () => void,
|};

type State = {|
  +isExpanded: boolean,
|};

const getSelectedRooms = memoize((props: Props) => {
  const availableRooms = props.room?.availableRooms ?? [];
  return availableRooms.filter(room => room?.selectedCount);
});

const getMaxNumberOfGuestsInSelection = memoize(selectedRooms => {
  return selectedRooms.reduce((acc, room) => {
    const selectedCount = room?.selectedCount ?? 0;
    const max = room?.room?.maxPersons ?? 0;
    return acc + max * selectedCount;
  }, 0);
});

export class RoomSummary extends React.Component<Props, State> {
  state = {
    isExpanded: false,
  };

  calculateSelectedData = () => {
    const positiveSelections = getSelectedRooms(this.props);

    const currency =
      positiveSelections[0]?.incrementalPriceWithExtraCharges?.[0]?.total
        ?.currencyId;
    // I wanted to split these reducers into separate functions
    // However flow does not seem to think that it is a good idea 😞
    return positiveSelections.reduce(
      (acc, room) => {
        const selectedCount = room?.selectedCount ?? 0;
        const incrementalPrice =
          room?.incrementalPriceWithExtraCharges?.[selectedCount - 1];
        const extraCharges = incrementalPrice?.extraCharges ?? [];

        const calculatedExtraCharges = extraCharges.reduce(
          (acc, charge) => {
            const amount = new Decimal(charge?.amount ?? 0);
            if (amount.equals(0)) {
              // Need more information about calculation
              // We might need to know exactly how may persons are in each room
              // Right now we don't, so we get a diff with what is in the booking.com webview
              return acc;
            }
            const chargeAmount = new Decimal(charge?.chargeAmount ?? 0);
            const excluded = charge?.excluded;
            const chargeName = charge?.name ?? '';
            const chargeType = charge?.type ?? '';
            // The price includes VAT, so we need to know what charges are included
            // To show it correctly we need to deduct VAT from the room price
            return {
              includedCharges: excluded
                ? acc.includedCharges
                : new Decimal(acc.includedCharges).plus(amount),
              excludedCharges: excluded
                ? new Decimal(acc.excludedCharges).plus(amount)
                : new Decimal(acc.excludedCharges),
              extraCharges: [
                ...acc.extraCharges,
                {
                  type: chargeType,
                  name:
                    charge?.type === 'VAT'
                      ? `${chargeAmount.toFixed(0)}% ${chargeName}`
                      : chargeName,
                  amount,
                },
              ],
            };
          },
          {
            includedCharges: new Decimal(0),
            excludedCharges: new Decimal(0),
            extraCharges: [],
          },
        );

        const bruttoRoomPrice = new Decimal(
          incrementalPrice?.total?.amount ?? 0,
        );

        const roomData = {
          id: room?.id ?? '',
          count: selectedCount ?? 0,
          title: room?.room?.description?.title ?? '',
          nettoPrice: bruttoRoomPrice.minus(
            calculatedExtraCharges.includedCharges,
          ),
        };

        return {
          ...acc,
          selectedRooms: [...acc.selectedRooms, roomData],
          bruttoPrice: acc.bruttoPrice
            .plus(bruttoRoomPrice)
            .plus(calculatedExtraCharges.excludedCharges),
          extraCharges: calculatedExtraCharges.extraCharges.reduce(
            (acc, curr) => {
              // We don't want to show each type more than one time
              // so we sum all charges, they are unique by type.
              const existingCharge = acc.find(
                charge => charge.type === curr.type,
              );
              if (existingCharge == null) {
                return [...acc, curr];
              }
              return [
                ...acc.filter(item => item.type !== existingCharge.type),
                {
                  ...existingCharge,
                  amount: existingCharge.amount.plus(curr.amount),
                },
              ];
            },
            acc.extraCharges,
          ),
        };
      },
      {
        selectedRooms: [],
        extraCharges: [],
        bruttoPrice: new Decimal(0),
        currency,
      },
    );
  };

  onSwipeDown = () => {
    this.setState({ isExpanded: false });
  };

  onSwipeUp = () => {
    this.setState({ isExpanded: true });
  };

  render() {
    const priceAndCharges = this.calculateSelectedData();
    const amount = priceAndCharges.bruttoPrice;
    const currency = priceAndCharges.currency;
    const maxPersons = getMaxNumberOfGuestsInSelection(
      getSelectedRooms(this.props),
    );
    const extraCharges = priceAndCharges.extraCharges;
    const rooms = priceAndCharges.selectedRooms;

    return (
      <>
        {amount != null && currency != null && (
          <VerticalSwipeResponder
            onSwipeDown={this.onSwipeDown}
            onSwipeUp={this.onSwipeUp}
          >
            <View style={styles.container}>
              <BottomSheetHandle style={styles.handle} />
              <ExtraCharges
                rooms={rooms}
                extraCharges={extraCharges}
                isExpanded={this.state.isExpanded}
                currency={currency}
              />
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
          </VerticalSwipeResponder>
        )}
        <SummaryButtons
          amount={amount.toString()}
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
  handle: {
    width: 40,
    position: 'absolute',
    top: 4,
  },
});

export default createFragmentContainer(RoomSummary, {
  room: graphql`
    fragment RoomSummary_room on HotelAvailabilityInterface {
      ...SummaryButtons_rooms
      availableRooms {
        id
        selectedCount
        incrementalPriceWithExtraCharges {
          total {
            amount
            currencyId
          }
          extraCharges {
            excluded
            amount
            name
            chargeAmount
            type
          }
        }
        room {
          description {
            title
          }
          maxPersons
        }
      }
    }
  `,
});
