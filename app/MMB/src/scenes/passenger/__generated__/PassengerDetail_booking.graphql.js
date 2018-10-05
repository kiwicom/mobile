/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Baggage$ref = any;
type ContactDetails_contactDetails$ref = any;
type Passenger_passenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerDetail_booking$ref: FragmentReference;
export type PassengerDetail_booking = {|
  +databaseId: ?number,
  +authToken: ?string,
  +contactDetails: ?{|
    +$fragmentRefs: ContactDetails_contactDetails$ref
  |},
  +passengers: ?$ReadOnlyArray<?{|
    +databaseId: ?number,
    +$fragmentRefs: Passenger_passenger$ref,
  |}>,
  +$fragmentRefs: Baggage$ref,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
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
    },
    {
      "kind": "FragmentSpread",
      "name": "Baggage",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bba468184ab0b288fa7022fdcf4bf01a';
module.exports = node;
