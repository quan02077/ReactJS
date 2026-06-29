import { useState } from "react";
import Content from "./content";

function MemoExample() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <Content />
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}

export default MemoExample