/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CryptoName_cryptoCurrency$ref: FragmentReference;
declare export opaque type CryptoName_cryptoCurrency$fragmentType: CryptoName_cryptoCurrency$ref;
export type CryptoName_cryptoCurrency = {|
  +name: string,
  +$refType: CryptoName_cryptoCurrency$ref,
|};
export type CryptoName_cryptoCurrency$data = CryptoName_cryptoCurrency;
export type CryptoName_cryptoCurrency$key = {
  +$data?: CryptoName_cryptoCurrency$data,
  +$fragmentRefs: CryptoName_cryptoCurrency$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CryptoName_cryptoCurrency",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "CryptoCurrency",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e103a1652a249a0b343fd02e07459347';

module.exports = node;
