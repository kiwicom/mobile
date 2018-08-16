/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CarRentalMenuItem$ref = any;
type LoungeMenuItem$ref = any;
type ParkingMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripServiceRefreshContainer$ref: FragmentReference;
export type TripServiceRefreshContainer = {|
  +databaseId: ?number,
  +authToken: ?string,
  +availableWhitelabeledServices: ?{|
    +$fragmentRefs: CarRentalMenuItem$ref & LoungeMenuItem$ref & ParkingMenuItem$ref
  |},
  +$refType: TripServiceRefreshContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripServiceRefreshContainer",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "availableWhitelabeledServices",
      "storageKey": null,
      "args": null,
      "concreteType": "WhitelabeledServices",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CarRentalMenuItem",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "LoungeMenuItem",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ParkingMenuItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2f22b177daafd6f933ba1e0697f639a2';
module.exports = node;
