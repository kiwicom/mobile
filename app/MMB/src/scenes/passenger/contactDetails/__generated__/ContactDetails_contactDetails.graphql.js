/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContactDetails_contactDetails$ref: FragmentReference;
export type ContactDetails_contactDetails = {|
  +phone: ?string,
  +email: ?string,
  +$refType: ContactDetails_contactDetails$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ContactDetails_contactDetails",
  "type": "BookingContactDetails",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "phone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8da359cd189f8d46256e8e7cf7483f02';
module.exports = node;
