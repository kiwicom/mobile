// @flow

import idx from 'idx';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';

export default (room: ?BeddingInfo_room): string => {
  const type = idx(room, _ => _.type);
  const beddingOptions = idx(room, _ => _.bedding) || [];
  const bedding = beddingOptions
    .map(beddingOption => {
      const type = idx(beddingOption, _ => _.type);
      const amount = idx(beddingOption, _ => _.amount);
      return [amount, type].filter(value => value != null).join(' ');
    })
    .join(' or ');

  return [type, bedding]
    .filter(value => value !== null && value !== '')
    .join(' · ');
};
