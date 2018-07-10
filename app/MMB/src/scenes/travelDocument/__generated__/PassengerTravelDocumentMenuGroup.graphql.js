/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PassengerMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerTravelDocumentMenuGroup$ref: FragmentReference;
export type PassengerTravelDocumentMenuGroup = {|
  +passengers: ?$ReadOnlyArray<?{|
    +databaseId: ?number,
    +$fragmentRefs: PassengerMenuItem$ref,
  |}>,
  +$refType: PassengerTravelDocumentMenuGroup$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerTravelDocumentMenuGroup",
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
          "name": "PassengerMenuItem",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '53bf819a6df43c7f90165760bea11ef4';
module.exports = node;
