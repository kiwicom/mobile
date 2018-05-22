/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type VisaInformation_visa$ref: FragmentReference;
export type VisaInformation_visa = {|
  +visaInformation: ?{|
    +requiredIn: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
    +warningIn: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |},
  +$refType: VisaInformation_visa$ref,
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
  "name": "VisaInformation_visa",
  "type": "Passenger",
  "metadata": null,
  "argumentDefinitions": [],
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '389022b56a00315a1f58e4dd6d439fb7';
module.exports = node;
