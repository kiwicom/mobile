/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type GeneralServicesMenuGroup$ref = any;
type LocalServicesMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripServiceRefreshContainer$ref: FragmentReference;
export type TripServiceRefreshContainer = {|
  +databaseId: ?number,
  +authToken: ?string,
  +availableWhitelabeledServices: ?{|
    +$fragmentRefs: LocalServicesMenuGroup$ref
  |},
  +$fragmentRefs: GeneralServicesMenuGroup$ref,
  +$refType: TripServiceRefreshContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripServiceRefreshContainer",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "GeneralServicesMenuGroup",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "availableWhitelabeledServices",
      "storageKey": null,
      "args": null,
      "concreteType": "WhitelabeledServices",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "LocalServicesMenuGroup",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e6313664e261243c75ade3032276f3f1';
module.exports = node;
