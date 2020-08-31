import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      "headers": {
        "content-type": "application/json",
      },
      "body": "{\"operationName\":null,\"variables\":{},\"query\":\"mutation {\\n  addCryptoCurrency(name: \\\"Ethereum\\\", value: \\\"436.57\\\")\\n}\\n\"}",
      "method": "POST",
    })
      .then( resp => resp.json())
      .then( data => setData(data));
  }, []);

  return (
    <div
      style={{
        padding: '1em',
        width: '800px',
        margin: 'auto'
      }}
    >
      <h1>Query</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
