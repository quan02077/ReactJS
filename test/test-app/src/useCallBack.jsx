import { useState, useCallback } from "react";
import Content from "./content";

function UseCallBackExample() {
    const [count, setCount] = useState(0)

    const increase = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <Content onIncrease={increase} />
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallBackExample