/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addCryptoMutationVariables = {|
  name: string,
  value: string,
|};
export type addCryptoMutationResponse = {|
  +addCryptoCurrency: string
|};
export type addCryptoMutation = {|
  variables: addCryptoMutationVariables,
  response: addCryptoMutationResponse,
|};
*/


/*
mutation addCryptoMutation(
  $name: String!
  $value: String!
) {
  addCryptoCurrency(name: $name, value: $value)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "kind": "ScalarField",
    "name": "addCryptoCurrency",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addCryptoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addCryptoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4edcf0f96bf4c08a60762c1fcebde1f6",
    "id": null,
    "metadata": {},
    "name": "addCryptoMutation",
    "operationKind": "mutation",
    "text": "mutation addCryptoMutation(\n  $name: String!\n  $value: String!\n) {\n  addCryptoCurrency(name: $name, value: $value)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2509bc35339a09017782c39269e0ac81';

module.exports = node;
