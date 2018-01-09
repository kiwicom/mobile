/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type Airline = {|
  +name: ?string;
  +code: ?string;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Airline",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "code",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AirlineLogo",
      "args": null
    }
  ],
  "type": "Airline"
};

module.exports = node;
