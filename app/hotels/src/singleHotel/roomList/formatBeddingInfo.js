// @flow

import idx from 'idx';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';

export default (room: ?BeddingInfo_room): string => {
  const type = idx(room, _ => _.type);
  const maxPersons = idx(room, _ => _.maxPersons);
  const beddingOptions = idx(room, _ => _.bedding) || [];
  const bedding = beddingOptions
    .map(beddingOption => {
      const type = idx(beddingOption, _ => _.type);
      const amount = idx(beddingOption, _ => _.amount);
      return [amount, type].filter(value => value != null).join(' ');
    })
    .join(' or ');
  const persons =
    maxPersons == null
      ? null
      : `${maxPersons} ${maxPersons > 1 ? 'Persons' : 'Person'}`;

  return [type, persons, bedding]
    .filter(value => value !== null && value !== '')
    .join(' · ');
};
