/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineArrival$ref = any;
type TimelineDeparture_legInfo$ref = any;
type TimelineDeparture_routeStop$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Timeline$ref: FragmentReference;
export type Timeline = {|
  +legs: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +$fragmentRefs: TimelineDeparture_routeStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: TimelineArrival$ref
    |},
    +$fragmentRefs: TimelineDeparture_legInfo$ref,
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
              "name": "TimelineDeparture_routeStop",
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
        },
        {
          "kind": "FragmentSpread",
          "name": "TimelineDeparture_legInfo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1ccf9a7aa758575d322f96ff6f86481c';
module.exports = node;
