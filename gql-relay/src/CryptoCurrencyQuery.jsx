import React from "react"
import { QueryRenderer } from "react-relay"
import environment from "./relayEnvironment"
import graphql from 'babel-plugin-relay/macro';

import CryptoName from './CryptoName';
import CryptoValue from './CryptoValue'

// Below you can usually use one query renderer per page
// and it represents the root of a query
export default function CryptoCurrencyQuery() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CryptoCurrencyQuery {
          cryptoCurrency {
            ...CryptoName_cryptoCurrency
            ...CryptoValue_cryptoCurrency
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <div>
              <CryptoName {...props} />:
              <CryptoValue {...props} />
            </div>
          );
        }
        return <div>Loading</div>;
      }}
    />
  );
}