/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CryptoName_cryptoCurrency$ref = any;
type CryptoValue_cryptoCurrency$ref = any;
export type CryptoCurrencyQueryVariables = {||};
export type CryptoCurrencyQueryResponse = {|
  +cryptoCurrency: {|
    +$fragmentRefs: CryptoName_cryptoCurrency$ref & CryptoValue_cryptoCurrency$ref
  |}
|};
export type CryptoCurrencyQuery = {|
  variables: CryptoCurrencyQueryVariables,
  response: CryptoCurrencyQueryResponse,
|};
*/


/*
query CryptoCurrencyQuery {
  cryptoCurrency {
    ...CryptoName_cryptoCurrency
    ...CryptoValue_cryptoCurrency
  }
}

fragment CryptoName_cryptoCurrency on CryptoCurrency {
  name
}

fragment CryptoValue_cryptoCurrency on CryptoCurrency {
  value
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CryptoCurrencyQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CryptoCurrency",
        "kind": "LinkedField",
        "name": "cryptoCurrency",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CryptoName_cryptoCurrency"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CryptoValue_cryptoCurrency"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CryptoCurrencyQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CryptoCurrency",
        "kind": "LinkedField",
        "name": "cryptoCurrency",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "186b3f8016689464846ad7473a953e65",
    "id": null,
    "metadata": {},
    "name": "CryptoCurrencyQuery",
    "operationKind": "query",
    "text": "query CryptoCurrencyQuery {\n  cryptoCurrency {\n    ...CryptoName_cryptoCurrency\n    ...CryptoValue_cryptoCurrency\n  }\n}\n\nfragment CryptoName_cryptoCurrency on CryptoCurrency {\n  name\n}\n\nfragment CryptoValue_cryptoCurrency on CryptoCurrency {\n  value\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd4ad603934f46cbb6ce306e2a7e314b5';

module.exports = node;
