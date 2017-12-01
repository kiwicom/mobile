/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllBookingsListNode = {|
  +id: string;
  +databaseId: ?number;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AllBookingsListNode",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "databaseId",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OverviewRow_node",
      "args": null
    }
  ],
  "type": "Booking"
};

module.exports = node;
