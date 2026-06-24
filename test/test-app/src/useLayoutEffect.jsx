import { useState, useEffect, useLayoutEffect } from "react";

//useEffect:
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//3. Render lại UI
//4. Gọi cleanup nếu deps thay đổi
//5. Gọi useEffect callback

//useLayoutEffect:
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//2. Gọi cleanup nếu deps thay đổi(sync)
//4. Gọi useLayoutEffect callback(sync)
//5. Render lại UI

function UseLayoutEffectExample() {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleInrease = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleInrease}>Run</button>
        </div>
    )
}

export default UseLayoutEffectExample
