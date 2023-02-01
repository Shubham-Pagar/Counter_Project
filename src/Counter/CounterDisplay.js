import './CounterDisplay.css';

function CounterDisplay(props) {
    console.log(typeof props.count);
    return (
        <div className='container_display'>
            <p>This updated value</p>
            <div>{props.count}</div>
        </div>
    );
}
export default CounterDisplay;