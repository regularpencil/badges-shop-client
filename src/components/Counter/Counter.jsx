import "./Counter.scss";

const Counter = ({price, id}) => {

    const dispatch = useDispatch();

    const [counterValue, setCounterValue] = useState(1);

    function plus() {
        const newValue = counterValue + 1;
        setCounterValue(newValue);
        dispatch({type:"PLUS_TOTAL_PRICE", payload: {price, id}});
    }

    function minus() {
        const newValue = counterValue - 1;
        if(newValue < 1) {
            setCounterValue(1);
        } else {
            setCounter(newValue);
            dispatch({type:"MINUS_TOTAL_PRICE", payload: {price, id}});
        }
    }

    return (
        <div className="counter">
            <div className="counter__minus" onClick={minus}></div>
            <div className="counter__num">{counter}</div>
            <div className="counter__plus" onClick={plus}></div>
        </div>
    )
}

export default Counter;