import React from "react"
import { createFragmentContainer, QueryRenderer } from "react-relay"
import environment from "./lib/createRelayEnvironment"
import graphql from 'babel-plugin-relay/macro';

import CryptoName from './CryptoName';

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
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <CryptoName {...props} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
}