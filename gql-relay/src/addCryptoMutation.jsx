import {commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';


const mutation = graphql`
  mutation addCryptoMutation(
    $name: String!
    $value: String!
  ) {
    addCryptoCurrency(name: $name, value: $value)
  }
`;

export default function addCryptoMutation(environment, name, value) {
  return new Promise(resolve => {
    const variables = {
      name,
      value,
    };
  
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          resolve(response);
        },
        onError: err => console.error(err),
      },
    );
  });
}