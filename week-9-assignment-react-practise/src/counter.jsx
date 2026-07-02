//I have to create a application which includes the increasement button,decreasement button,reset button.import { useState } from "react";



import { useState } from "react";
function App () {
    return (
        <div>
            Hello Harsh
            <Counter></Counter>
        </div>
    )
}
function Counter() {
    const[count,setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    )
}
export default App;