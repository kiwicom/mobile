// @flow

import idx from 'idx';

import type { BookNow_availableRooms } from '../__generated__/HotelDetailScreen_availableHotel.graphql';

type Money = {|
  amount: number,
  currency: string,
|};

export default (
  availableRooms: ?BookNow_availableRooms,
  selected: {
    [string]: number,
  },
): ?Money => {
  if (!availableRooms) {
    return null;
  }
  const positiveSelections = Object.entries(selected).filter(
    (selection: any) => selection[1] > 0,
  );

  if (positiveSelections.length === 0) {
    return null;
  }

  const amount = positiveSelections
    .map((selection: any) => {
      const [originalId, count] = selection;

      if (availableRooms) {
        const room = availableRooms.find(
          room => room.originalId === originalId,
        );
        return idx(room, _ => _.incrementalPrice[count - 1].amount);
      }
    })
    .reduce((a, b) => a + b, 0);

  const currency =
    idx(
      availableRooms.find(room => room.originalId === positiveSelections[0][0]),
      _ => _.incrementalPrice[0].currency,
    ) || '';

  return {
    amount,
    currency,
  };
};
