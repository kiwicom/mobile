/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityFlight_booking$ref = any;
type OneWayFlight_booking$ref = any;
type ReturnFlight_booking$ref = any;
export type BookingType = "MULTICITY" | "ONE_WAY" | "RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightList$ref: FragmentReference;
export type FlightList = {|
  +allBookings: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +destinationImageUrl: ?string,
        +type: ?BookingType,
        +oneWay: ?{|
          +$fragmentRefs: OneWayFlight_booking$ref
        |},
        +return: ?{|
          +$fragmentRefs: ReturnFlight_booking$ref
        |},
        +multicity: ?{|
          +$fragmentRefs: MulticityFlight_booking$ref
        |},
      |}
    |}>
  |},
  +$refType: FlightList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightList",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allBookings",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "BookingEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Booking",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "destinationImageUrl",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "dimensions",
                      "value": "_375x165",
                      "type": "BookingDestinationImageDimensions"
                    }
                  ],
                  "storageKey": "destinationImageUrl(dimensions:\"_375x165\")"
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "type",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "oneWay",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "BookingOneWay",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "OneWayFlight_booking",
                      "args": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "return",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "BookingReturn",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "ReturnFlight_booking",
                      "args": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "multicity",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "BookingMulticity",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "MulticityFlight_booking",
                      "args": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '31be66121280b836a8395c814fa60aa8';
module.exports = node;
