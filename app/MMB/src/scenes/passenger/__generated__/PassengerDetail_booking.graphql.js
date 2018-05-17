/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Passenger_passenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerDetail_booking$ref: FragmentReference;
export type PassengerDetail_booking = {|
  +databaseId: ?number,
  +passengers: ?$ReadOnlyArray<?{|
    +databaseId: ?number,
    +$fragmentRefs: Passenger_passenger$ref,
  |}>,
  +$refType: PassengerDetail_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PassengerDetail_booking",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "Passenger_passenger",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dce4bb97dcf24b367271af5b181dbe44';
module.exports = node;
