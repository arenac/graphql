import React from "react"
import { createFragmentContainer } from "react-relay"
import graphql from 'babel-plugin-relay/macro';

function CryptoValue({ cryptoCurrency }) {

  return (
    <strong>{cryptoCurrency.value}</strong>
  );
}

export default createFragmentContainer(CryptoValue, {
  cryptoCurrency: graphql`
    fragment CryptoValue_cryptoCurrency on CryptoCurrency {
      value
    }
  `,
});