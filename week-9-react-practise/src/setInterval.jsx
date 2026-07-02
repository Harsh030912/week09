import { useState, useEffect } from "react";

// mounting,re-rendering,unmounting
function SetIntervalCounter() { //which have this counter component
    const [count, setCount] = useState(0); //where we first define the state variable

    //hokking into the lifecycle events of react
    console.log("counter"); //what is ours goal the goal is that after every second the
    // counter log again and again but the function under the useEffect only got called once.

    //guard our setInterval from re-renders
    useEffect(function() { //then inside the useEffect

        setInterval(function() { //so we call the setInterval what does it do it takes function 
            //as an input and time as an input in function we write what should happen after every one seconds
            setCount(count => count + 1); //now this logic only called once which makes sure this logic haar ek second
                // chalega,but what do we want to happen in every one second ham yeh chahte hai ki hmara number 1 seh increase ho jaye  
        }, 1000)
    }, []);

    function increaseCount() {
        setCount(count + 1);
    }

    return <div>
        <h1 id="text">{count}</h1>
        <button onClick={increaseCount}>Increase count</button>
    </div>
}
export default SetIntervalCounter;