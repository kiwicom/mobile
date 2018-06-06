/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Timeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OneWayTimeline$ref: FragmentReference;
export type OneWayTimeline = {|
  +trip: ?{|
    +$fragmentRefs: Timeline$ref
  |},
  +$refType: OneWayTimeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWayTimeline",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trip",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Timeline",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e841cbfe513096c6c0995e856a12a5dc';
module.exports = node;
