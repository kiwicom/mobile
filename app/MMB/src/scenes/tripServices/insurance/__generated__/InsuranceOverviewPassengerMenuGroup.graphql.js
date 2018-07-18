/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PassengerInsuranceMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type InsuranceOverviewPassengerMenuGroup$ref: FragmentReference;
export type InsuranceOverviewPassengerMenuGroup = {|
  +passengers: ?$ReadOnlyArray<?{|
    +databaseId: ?number,
    +$fragmentRefs: PassengerInsuranceMenuItem$ref,
  |}>,
  +$refType: InsuranceOverviewPassengerMenuGroup$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InsuranceOverviewPassengerMenuGroup",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "databaseId",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PassengerInsuranceMenuItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0beced77ab433acc048a4a8b27a8262d';
module.exports = node;
