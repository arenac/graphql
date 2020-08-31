import React from 'react';

import CryptoCurrencyQuery from './CryptoCurrencyQuery';

function App() {
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
      <div>{}</div>
      <button onClick={() => {}}>Add a CryptoCurrency</button>
    </div>
  );
}

export default App;
