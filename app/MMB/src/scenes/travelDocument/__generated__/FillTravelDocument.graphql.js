/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FillTravelDocument$ref: FragmentReference;
export type FillTravelDocument = {|
  +id: string,
  +$fragmentRefs: TripInfo$ref,
  +$refType: FillTravelDocument$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FillTravelDocument",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "TripInfo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8eed1921d2182ac1e112409e1f00d4dc';
module.exports = node;
