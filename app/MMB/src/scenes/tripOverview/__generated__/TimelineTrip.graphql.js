/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineArrival$ref = any;
type TimelineDeparture_arrival$ref = any;
type TimelineDeparture_legInfo$ref = any;
type TimelineDeparture_routeStop$ref = any;
type TimelineLegWrapper$ref = any;
export type CoveredBy = "CARRIER" | "KIWICOM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineTrip$ref: FragmentReference;
export type TimelineTrip = {|
  +legs: ?$ReadOnlyArray<?{|
    +guarantee: ?CoveredBy,
    +departure: ?{|
      +$fragmentRefs: TimelineDeparture_routeStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: TimelineArrival$ref & TimelineDeparture_arrival$ref
    |},
    +$fragmentRefs: TimelineLegWrapper$ref & TimelineDeparture_legInfo$ref,
  |}>,
  +$refType: TimelineTrip$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineTrip",
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
          "kind": "FragmentSpread",
          "name": "TimelineLegWrapper",
          "args": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "guarantee",
          "args": null,
          "storageKey": null
        },
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
            },
            {
              "kind": "FragmentSpread",
              "name": "TimelineDeparture_arrival",
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
(node/*: any*/).hash = 'd57713f20d3b3e977c39b79d0c5f9efb';
module.exports = node;
