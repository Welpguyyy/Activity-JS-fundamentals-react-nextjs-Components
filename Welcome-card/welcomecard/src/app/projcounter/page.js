"use client";
//importing useState in react
import { useState } from "react";

//using useState here to make the counter interactive
export default function Counter() {

  const [count, setCount] = useState(0); 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}
