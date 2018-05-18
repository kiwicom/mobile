/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripCities$ref = any;
type TripTimes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoReturn$ref: FragmentReference;
export type TripInfoReturn = {|
  +outbound: ?{|
    +$fragmentRefs: TripCities$ref & TripTimes$ref
  |},
  +inbound: ?{|
    +$fragmentRefs: TripTimes$ref
  |},
  +$refType: TripInfoReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "FragmentSpread",
  "name": "TripTimes",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "TripInfoReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripCities",
          "args": null
        },
        v0
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        v0
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '39c5c8c9be8ab8f128fb130f007dcaa9';
module.exports = node;
