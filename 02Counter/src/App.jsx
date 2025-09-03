import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  // let Counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    console.log("clicked ", Math.random());
    setCounter(counter + 1);
  };

  const removeValue = () => {
    counter = counter - 1;
    if (counter < -20) {
      console.log("error");
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
