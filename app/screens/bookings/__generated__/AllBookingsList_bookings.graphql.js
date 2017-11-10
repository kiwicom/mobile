// @flow
/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllBookingsList_bookings = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: ?{|
        +assets: ?{|
          +ticketUrl: ?string;
          +invoiceUrl: ?string;
        |};
      |};
    |}>;
  |};
|};


export const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AllBookingsList_bookings",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "BookingConnection",
      "name": "allBookings",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "BookingEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Booking",
              "name": "node",
              "plural": false,
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
                  "kind": "FragmentSpread",
                  "name": "AllBookingsListRow_node",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery"
};
