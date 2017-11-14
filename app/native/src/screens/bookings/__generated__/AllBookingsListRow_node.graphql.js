/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllBookingsListRow_node = {|
  +assets: ?{|
    +ticketUrl: ?string;
    +invoiceUrl: ?string;
  |};
  +departure: ?{|
    +localTime: ?any;
  |};
  +arrival: ?{|
    +localTime: ?any;
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AllBookingsListRow_node",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "BookingAssets",
      "name": "assets",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "ticketUrl",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "invoiceUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "RouteStop",
      "name": "departure",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "localTime",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RouteStop",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "RouteStop",
      "name": "arrival",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "localTime",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RouteStop",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Booking"
};

module.exports = node;
