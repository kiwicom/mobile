/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type LocationPopupButton$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TransportationMenuItem$ref: FragmentReference;
export type TransportationMenuItem = {|
  +transportation: ?{|
    +relevantLocations: ?$ReadOnlyArray<?{|
      +whitelabelURL: ?string,
      +location: ?{|
        +$fragmentRefs: LocationPopupButton$ref
      |},
      +date: ?any,
    |}>
  |},
  +$refType: TransportationMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TransportationMenuItem",
  "type": "WhitelabeledServices",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "transportation",
      "storageKey": null,
      "args": null,
      "concreteType": "TransportationService",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "relevantLocations",
          "storageKey": null,
          "args": null,
          "concreteType": "TransportationServiceRelevantLocations",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "whitelabelURL",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "location",
              "storageKey": null,
              "args": null,
              "concreteType": "Location",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "LocationPopupButton",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "date",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ca50877455fd4c1e03885ed32bd28e8f';
module.exports = node;
