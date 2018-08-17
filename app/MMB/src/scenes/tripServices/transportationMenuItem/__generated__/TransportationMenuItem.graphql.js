/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TransportLocationItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TransportationMenuItem$ref: FragmentReference;
export type TransportationMenuItem = {|
  +transportation: ?{|
    +relevantLocations: ?$ReadOnlyArray<?{|
      +whitelabelURL: ?string,
      +location: ?{|
        +location: ?{|
          +lat: ?number,
          +lng: ?number,
        |},
        +city: ?{|
          +name: ?string
        |},
        +$fragmentRefs: TransportLocationItem$ref,
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
                  "name": "TransportLocationItem",
                  "args": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "location",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Coordinates",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lat",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lng",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "city",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "LocationArea",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "name",
                      "args": null,
                      "storageKey": null
                    }
                  ]
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
(node/*: any*/).hash = 'f8796db8c8a942834c038508976b30f6';
module.exports = node;
