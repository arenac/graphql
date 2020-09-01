import React, {useState} from 'react';

import CryptoCurrencyQuery from './CryptoCurrencyQuery';
import addCryptoMutation from './addCryptoMutation';
import environment from './relayEnvironment';

function App() {
  const [mutationREsponse, setMutationResponse] = useState(null);

  const addCurrency = async () => {
    const data = await addCryptoMutation(environment, "NiloCoin", "1000.0")
    setMutationResponse(data.addCryptoCurrency);
  }
  return (
    <div
      style={{
        padding: '1em',
        width: '800px',
        margin: 'auto'
      }}
    >
      <h1>Query</h1>
      <div>
        <CryptoCurrencyQuery />
      </div>
      <br/>
      <h1>Mutation</h1>
      <div>{mutationREsponse && JSON.stringify(mutationREsponse)}</div>
      <button onClick={addCurrency}>Add a CryptoCurrency</button>
    </div>
  );
}

export default App;
