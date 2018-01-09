/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllBookingsAssetsDownloader = {|
  +ticketUrl: ?string;
  +invoiceUrl: ?string;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AllBookingsAssetsDownloader",
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
  "type": "BookingAssets"
};

module.exports = node;
