/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightSegments$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassMultiCity$ref: FragmentReference;
export type BoardingPassMultiCity = {|
  +trips: ?$ReadOnlyArray<?{|
    +arrival: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string
        |}
      |}
    |},
    +$fragmentRefs: FlightSegments$ref,
  |}>,
  +$refType: BoardingPassMultiCity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassMultiCity",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "airport",
              "storageKey": null,
              "args": null,
              "concreteType": "Location",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "city",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "LocationArea",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "FlightSegments",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eab377e83a6117c64ba37343e00bf024';
module.exports = node;
