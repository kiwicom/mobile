/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BeddingInfo_room$ref: FragmentReference;
export type BeddingInfo_room = {|
  +type: ?string,
  +maxPersons: ?number,
  +bedding: ?$ReadOnlyArray<?{|
    +type: ?string,
    +amount: ?number,
  |}>,
  +$refType: BeddingInfo_room$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "BeddingInfo_room",
  "type": "HotelRoom",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "maxPersons",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "bedding",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRoomBedding",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bae4050720f373f37ddf8934d58ba3b1';
module.exports = node;
