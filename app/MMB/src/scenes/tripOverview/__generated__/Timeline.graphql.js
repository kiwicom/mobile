/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineArrival$ref = any;
type TimelineDeparture$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Timeline$ref: FragmentReference;
export type Timeline = {|
  +legs: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +$fragmentRefs: TimelineDeparture$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: TimelineArrival$ref
    |},
  |}>,
  +$refType: Timeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Timeline",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "TimelineDeparture",
              "args": null
            }
          ]
        },
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
              "kind": "FragmentSpread",
              "name": "TimelineArrival",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b8b1b2ca39c4db40f5c6bff1752cca70';
module.exports = node;
