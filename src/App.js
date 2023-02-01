import React, { useState } from "react";
import CounterInput from './Counter/CounterInput';
import CounterButton from './Counter/CounterButton'
import CounterDisplay from "./Counter/CounterDisplay";
function App() {
  const [count, setCount] = useState();

  const onChangeHandler = (event) => {
    setCount(parseInt(event.target.value))
  }
  const incrementHandler = (event) => {
    setCount(count + 1)
    console.log("update");
  }
  const decrementHandler = () => {
    setCount(count - 1)
    console.log("Minus");
  }
  return (
    <div className="App">
      <CounterInput count={count} onChange={onChangeHandler} />
      <CounterButton DecrementHandler={decrementHandler} IncrementHandler={incrementHandler} />
      <CounterDisplay count={(count)} />
    </div>
  );
}

export default App;


//Ask to mentor
//State Lifting
//git
//how to create repository and post 
//Spotify