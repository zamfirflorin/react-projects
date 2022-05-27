import React from "react";
import {useState, useEffect} from "react";

const Counter = (props) => {

    const [counter, setCounter] = useState(1);

    return (<div>
        <h2>{`Counter value is : ${counter + 1}`}</h2>
        <h3>{`Setting the counter value : ${counter}`}</h3>
        <button onClick={() => setCounter(counter + 1)}>
            Click me!
        </button>
    </div>);
}

export default Counter;