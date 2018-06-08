/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ContactDetails_contactDetails$ref = any;
type Passenger_passenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerDetail_booking$ref: FragmentReference;
export type PassengerDetail_booking = {|
  +databaseId: ?number,
  +contactDetails: ?{|
    +$fragmentRefs: ContactDetails_contactDetails$ref
  |},
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
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "contactDetails",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingContactDetails",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ContactDetails_contactDetails",
          "args": null
        }
      ]
    },
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
(node/*: any*/).hash = '403a04d1697ee27fa87dab03d5e4c085';
module.exports = node;
