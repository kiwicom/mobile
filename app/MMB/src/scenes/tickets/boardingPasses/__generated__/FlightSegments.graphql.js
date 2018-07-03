/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightFromTo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightSegments$ref: FragmentReference;
export type FlightSegments = {|
  +legs: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: FlightFromTo$ref,
  |}>,
  +$refType: FlightSegments$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightSegments",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "FlightFromTo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '322c97f6d93eaee0c8cb171406dc256b';
module.exports = node;
