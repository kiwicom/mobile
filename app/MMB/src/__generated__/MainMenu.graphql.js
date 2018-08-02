/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreCity$ref = any;
type Header$ref = any;
type MissingInformation$ref = any;
type PassengerMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +databaseId: ?number,
  +authToken: ?string,
  +isPastBooking: ?boolean,
  +$fragmentRefs: ExploreCity$ref & Header$ref & PassengerMenuGroup$ref & MissingInformation$ref,
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
      "name": "ExploreCity",
      "args": null
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
(node/*: any*/).hash = '552111bb52696080f0c59d66c7388410';
module.exports = node;
