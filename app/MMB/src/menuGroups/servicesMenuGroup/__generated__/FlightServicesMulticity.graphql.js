/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightServicesMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServicesMulticity$ref: FragmentReference;
export type FlightServicesMulticity = {|
  +trips?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: FlightServicesMenuItem$ref
  |}>,
  +$refType: FlightServicesMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightServicesMulticity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trips",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "FlightServicesMenuItem",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5ea92f79aa707eed9c9330dbff2136a6';
module.exports = node;
