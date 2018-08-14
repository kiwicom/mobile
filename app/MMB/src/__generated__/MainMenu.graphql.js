/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type MissingInformation$ref = any;
type PassengerMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +databaseId: ?number,
  +authToken: ?string,
  +isPastBooking: ?boolean,
  +$fragmentRefs: Header$ref & PassengerMenuGroup$ref & MissingInformation$ref,
  +$refType: MainMenu$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MainMenu",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PassengerMenuGroup",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MissingInformation",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '08bdf9ad22673f879b0aba513e7a6d2c';
module.exports = node;
