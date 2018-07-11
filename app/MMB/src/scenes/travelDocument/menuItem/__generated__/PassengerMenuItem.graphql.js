/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerMenuItem$ref: FragmentReference;
export type PassengerMenuItem = {|
  +fullName: ?string,
  +title: ?string,
  +travelDocument: ?{|
    +idNumber: ?string,
    +expiration: ?any,
  |},
  +$refType: PassengerMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerMenuItem",
  "type": "Passenger",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "travelDocument",
      "storageKey": null,
      "args": null,
      "concreteType": "TravelDocument",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "idNumber",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "expiration",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6a0c11317c82c9199a530d7cb2abf2e5';
module.exports = node;
