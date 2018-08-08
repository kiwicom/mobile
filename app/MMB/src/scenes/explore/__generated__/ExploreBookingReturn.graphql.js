/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreAirportGroup$ref = any;
type ExploreDestinationsGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreBookingReturn$ref: FragmentReference;
export type ExploreBookingReturn = {|
  +outbound: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ExploreAirportGroup$ref
    |}>,
    +$fragmentRefs: ExploreDestinationsGroup$ref,
  |},
  +inbound: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ExploreAirportGroup$ref
    |}>,
    +$fragmentRefs: ExploreDestinationsGroup$ref,
  |},
  +$refType: ExploreBookingReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "ExploreDestinationsGroup",
    "args": null
  },
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
        "name": "ExploreAirportGroup",
        "args": null
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "ExploreBookingReturn",
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
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '813bb1abc0d5407374ac4bf4c1b93820';
module.exports = node;
