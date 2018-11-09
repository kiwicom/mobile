// @flow

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';

export default (room: ?BeddingInfo_room): string => {
  const beddingOptions = room?.bedding ?? [];
  return beddingOptions
    .map(beddingOption => {
      const type = beddingOption?.type;
      const amount = beddingOption?.amount;
      return [amount, type].filter(value => value != null).join(' ');
    })
    .join(' or '); // TODO: Translate
};
