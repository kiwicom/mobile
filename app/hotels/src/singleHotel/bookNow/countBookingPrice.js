// @flow

import type { HotelDetailScreen_availableHotel as HotelType } from '../__generated__/HotelDetailScreen_availableHotel.graphql';

type Money = {|
  amount: number,
  currency: string,
|};

export default (
  availableRooms: ?$PropertyType<HotelType, 'availableRooms'>,
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
    // eslint-disable-next-line consistent-return
    .map((selection: any) => {
      const [id, count] = selection;

      if (availableRooms) {
        const room = availableRooms.find(room => room?.id === id);
        return room?.incrementalPrice?.[count - 1]?.amount;
      }
    })
    .reduce((a, b) => a + b, 0);

  const currency =
    availableRooms.find(room => room?.id === positiveSelections[0][0])
      ?.incrementalPrice?.[0]?.currency ?? '';

  return {
    amount,
    currency,
  };
};
