import { useStore, actions } from "./";
import { useRef } from "react";

function App() {
    const [state, dispatch] = useStore()
    const { toDoInput, toDos, editIndex } = state
    const focusRef = useRef()

    const handelAdd = () => {
        if (!toDoInput.trim()) return

        if (editIndex !== null) {
            dispatch(actions.updateToDo(toDoInput))
        } else {
            dispatch(actions.setToDos(toDoInput))
            dispatch(actions.setToDo(''))
        }

        focusRef.current.focus()
    }

    return (
        <div>
            <input
                ref={focusRef}
                value={toDoInput}
                placeholder="Enter job..."
                onChange={
                    e => {
                        dispatch(actions.setToDo(e.target.value))
                    }
                }
            />
            <button onClick={handelAdd}>Add</button>
            <ul>
                {
                    toDos.map((todo, index) => (
                        <li key={index}>{todo}
                            <span onClick={() => {
                                dispatch(actions.setToDo(todo))
                                dispatch(actions.setEditIndex(index))
                                focusRef.current.focus()
                            }}>&#9998;</span>
                            <span onClick={() => dispatch(actions.deleteToDo(index))}>&times;</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App