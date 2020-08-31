import React, { useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';

const GET_CRYPTOCURRENCY = gql`
  {
    cryptoCurrency {
      name
      value
    }
  }
`;

function App() {

  const { loading, error, data } = useQuery(GET_CRYPTOCURRENCY);

  const [invokeAddCryptoCurrency, { data: mutationResponse }] = useMutation(gql`
    mutation($name: String!, $value: String!) {
      addCryptoCurrency(name: $name, value: $value)
    }
  `)

  const addCryptoCurrency = () => {
    invokeAddCryptoCurrency({
      variables: {
        name: "NiloCoin",
        value: "1000.00",
      }
    });
  };

  return (
      <div
        style={{
          padding: '1em',
          width: '800px',
          margin: 'auto'
        }}
      >
        <h1>Query</h1>
        <span>{loading}</span>
        <div>{JSON.stringify(data)}</div>
        <br/>
        <h1>Mutation</h1>
        <div>{JSON.stringify(mutationResponse)}</div>
        <button onClick={addCryptoCurrency}>Add a CryptoCurrency</button>
      </div>
  );
}

export default App;
