/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MissingInformation$ref: FragmentReference;
export type MissingInformation = {|
  +passengers: ?$ReadOnlyArray<?{|
    +travelDocument: ?{|
      +idNumber: ?string
    |}
  |}>,
  +$refType: MissingInformation$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MissingInformation",
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
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f8a8069619f85b92099f63d8ea2b613b';
module.exports = node;
