/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FromToRow_arrival$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityImageContainer_arrival$ref: FragmentReference;
export type CityImageContainer_arrival = {|
  +cityId: ?string,
  +time: ?any,
  +$fragmentRefs: FromToRow_arrival$ref,
  +$refType: CityImageContainer_arrival$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImageContainer_arrival",
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
(node/*: any*/).hash = '57d41faa278600ffad29e89b49ac3f20';
module.exports = node;
