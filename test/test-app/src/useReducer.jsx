import { useReducer } from "react";
//tạo giá trị khởi tạo
const initialState = 0
//tạo action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//tạo reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function UseReducerExample() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </>
    )
}

export default UseReducerExample