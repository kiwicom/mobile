/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Timeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticityTimeline$ref: FragmentReference;
export type MulticityTimeline = {|
  +trips: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Timeline$ref
  |}>,
  +$refType: MulticityTimeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityTimeline",
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
          "kind": "FragmentSpread",
          "name": "Timeline",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd6824f466cb4ca31c65f608aa9601d8d';
module.exports = node;
