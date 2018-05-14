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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '83aa66339e287f7815c8ab1825e69a46';
module.exports = node;
