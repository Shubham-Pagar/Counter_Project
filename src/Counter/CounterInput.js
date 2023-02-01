import React from "react";
import './CounterInput.css';
function CounterInput(props) {

    return (

        <div className="container_input">
            <h3>Enter the counter value </h3>
            <input type='number' value={props.count} onChange={props.onChange}></input>
        </div>
    );
}
export default CounterInput;