import './CounterButton.css';
function CounterButton(props) {
    return (
        <div className='container_button'>
            <button onClick={props.IncrementHandler}>
                Increment
            </button>
            <button onClick={props.DecrementHandler}>
                Decrement
            </button>
        </div>
    );
}

export default CounterButton;