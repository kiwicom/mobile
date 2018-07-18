/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TravelDocumentPassengerMenuItem$ref: FragmentReference;
export type TravelDocumentPassengerMenuItem = {|
  +title: ?string,
  +fullName: ?string,
  +travelDocument: ?{|
    +idNumber: ?string,
    +expiration: ?any,
  |},
  +$refType: TravelDocumentPassengerMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TravelDocumentPassengerMenuItem",
  "type": "Passenger",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "travelDocument",
      "storageKey": null,
      "args": null,
      "concreteType": "TravelDocument",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "idNumber",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "expiration",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'de53565386f539710ba3eaa2e0f23034';
module.exports = node;
