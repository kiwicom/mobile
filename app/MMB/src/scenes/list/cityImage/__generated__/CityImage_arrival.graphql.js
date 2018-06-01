/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FromToRow_arrival$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityImage_arrival$ref: FragmentReference;
export type CityImage_arrival = {|
  +cityId: ?string,
  +time: ?any,
  +$fragmentRefs: FromToRow_arrival$ref,
  +$refType: CityImage_arrival$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImage_arrival",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromToRow_arrival",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cityId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "time",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b0ac23d857e7bda1db54b32ddc8d19ee';
module.exports = node;
