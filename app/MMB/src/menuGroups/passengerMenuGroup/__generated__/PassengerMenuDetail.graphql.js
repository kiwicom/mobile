/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Passenger$ref = any;
type Visa$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerMenuDetail$ref: FragmentReference;
export type PassengerMenuDetail = {|
  +passengers: ?$ReadOnlyArray<?{|
    +databaseId: ?number,
    +$fragmentRefs: Passenger$ref,
  |}>,
  +$fragmentRefs: Visa$ref,
  +$refType: PassengerMenuDetail$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerMenuDetail",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Visa",
      "args": null
    },
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
          "name": "Passenger",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75e8c334058816218ce6f07e5b75d013';
module.exports = node;
