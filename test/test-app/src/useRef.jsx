import { useRef, useState, useEffect } from "react";

function UseRefExample() {
    const [count, setCount] = useState(60)
    const timerID = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    // useEffect(() => {
    //     console.log(h1Ref.current)
    // })

    useEffect(() => {
        const ref = h1Ref.current.getBoundingClientRect()
        console.log(ref)
    })

    const HandelStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    function HandelStop() {
        clearInterval(timerID.current)
    }

    console.log(count, prevCount)

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={HandelStart}>Start</button>
            <button onClick={HandelStop}>Stop</button>
        </div>
    )
}

export default UseRefExample