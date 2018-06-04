/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Visa$ref: FragmentReference;
export type Visa = {|
  +passengers: ?$ReadOnlyArray<?{|
    +visaInformation: ?{|
      +requiredIn: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>,
      +warningIn: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>,
    |}
  |}>,
  +$refType: Visa$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Visa",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "visaInformation",
          "storageKey": null,
          "args": null,
          "concreteType": "Visa",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "requiredIn",
              "storageKey": null,
              "args": null,
              "concreteType": "Location",
              "plural": true,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "warningIn",
              "storageKey": null,
              "args": null,
              "concreteType": "Location",
              "plural": true,
              "selections": v0
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '59cd91887a5fe7fb18a8767ca74e6f2d';
module.exports = node;
