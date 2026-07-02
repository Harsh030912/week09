import { useState } from "react";

function Counter() { //Lets create the another component called counter
const [count,setCount] = useState(0); 

  function increaseCount() { //define the function called increaseCount which increase the count from 1 to 2 on button click
    setCount(count + 1);
  }

    function decreaseCount() {
      setCount(count - 1);
    }
    function resetCount() {
      setCount(0);
    }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button> {/*lets define a component which says increase count*/}
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
}

export default Counter