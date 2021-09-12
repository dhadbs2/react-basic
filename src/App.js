import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [Manroo, setManroo] = useState(0);

  useEffect(() => {
    console.log(count)
  }, [count])
  
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      g2
      <button onClick={increment}>Click</button>
      <button onClick={() => setManroo(Manroo + 1)}>Click1</button>
    </div>
  );
}

export default App;

