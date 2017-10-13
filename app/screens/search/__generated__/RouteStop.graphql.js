/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type RouteStop = {|
  +airport: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RouteStop",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Location",
      "name": "airport",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Airport",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RouteStop"
};

module.exports = fragment;
