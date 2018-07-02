/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type StatusBadge$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ImageBadges$ref: FragmentReference;
export type ImageBadges = {|
  +databaseId: ?number,
  +$fragmentRefs: StatusBadge$ref,
  +$refType: ImageBadges$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ImageBadges",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusBadge",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b9f6b3c06f86bd67abb9557492d7a96d';
module.exports = node;
