// @flow
/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AirlineLogo = {|
  +logoUrl: ?string;
|};


export const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AirlineLogo",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "logoUrl",
      "storageKey": null
    }
  ],
  "type": "Airline"
};
