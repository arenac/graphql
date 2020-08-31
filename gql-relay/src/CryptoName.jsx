import React from "react"
import { createFragmentContainer } from "react-relay"
import graphql from 'babel-plugin-relay/macro';

function CryptoName({ cryptoCurrency }) {

  return (
    <h5>{cryptoCurrency.name}</h5>
  );
}

export default createFragmentContainer(CryptoName, {
  cryptoCurrency: graphql`
    fragment CryptoName_cryptoCurrency on CryptoCurrency {
      name
    }
  `,
});