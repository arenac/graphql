/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CryptoValue_cryptoCurrency$ref: FragmentReference;
declare export opaque type CryptoValue_cryptoCurrency$fragmentType: CryptoValue_cryptoCurrency$ref;
export type CryptoValue_cryptoCurrency = {|
  +value: string,
  +$refType: CryptoValue_cryptoCurrency$ref,
|};
export type CryptoValue_cryptoCurrency$data = CryptoValue_cryptoCurrency;
export type CryptoValue_cryptoCurrency$key = {
  +$data?: CryptoValue_cryptoCurrency$data,
  +$fragmentRefs: CryptoValue_cryptoCurrency$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CryptoValue_cryptoCurrency",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "CryptoCurrency",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'b2bd1443bf938cf67c5a15bace2a99a7';

module.exports = node;
