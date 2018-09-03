/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineDeparture_routeStop$ref: FragmentReference;
export type TimelineDeparture_routeStop = {|
  +terminal: ?string,
  +airport: ?{|
    +code: ?string,
    +city: ?{|
      +name: ?string
    |},
  |},
  +$fragmentRefs: TimelineTitle$ref,
  +$refType: TimelineDeparture_routeStop$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineDeparture_routeStop",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TimelineTitle",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "terminal",
      "args": null,
      "storageKey": null
    },
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
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        },
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
};
// prettier-ignore
(node/*: any*/).hash = 'a6b9d139531030379ee3c46293494a47';
module.exports = node;
