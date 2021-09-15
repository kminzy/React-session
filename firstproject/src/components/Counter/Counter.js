import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
    <>
    <div className="counter">This is {counter}</div>
    <button
        onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                plus
    </button>

    </>
    );
}

export default Counter;
