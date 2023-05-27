import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div class="container">
      <h1>Counter</h1>
      <h3> {count} </h3>
      <button onClick={increment}>Increase</button>
      <button style={{ width: "150px"}} onClick={reset}>
        Reset
      </button>
      <button onClick={decrement}>Decrease</button>
      <div class="loader"></div>
    </div>
  );
};

export default Counter;
