/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CryptoName_cryptoCurrency$ref = any;
export type CryptoCurrencyQueryVariables = {||};
export type CryptoCurrencyQueryResponse = {|
  +cryptoCurrency: {|
    +$fragmentRefs: CryptoName_cryptoCurrency$ref
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
  }
}

fragment CryptoName_cryptoCurrency on CryptoCurrency {
  name
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d2a3a8f634f2c7ed178b10df16de658",
    "id": null,
    "metadata": {},
    "name": "CryptoCurrencyQuery",
    "operationKind": "query",
    "text": "query CryptoCurrencyQuery {\n  cryptoCurrency {\n    ...CryptoName_cryptoCurrency\n  }\n}\n\nfragment CryptoName_cryptoCurrency on CryptoCurrency {\n  name\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '9a57310a816504d32bc579f9ef4ac146';

module.exports = node;
