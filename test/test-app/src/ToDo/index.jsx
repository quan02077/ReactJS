import { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./action";
import reducer, { initialState } from "./reducer";

function ToDoList_useReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { job, jobs } = state
    const jobRef = useRef()

    const handleSubmit = () => {
        if (!job.trim()) return

        dispatch(addJob(job))
        dispatch(setJob(''))
        jobRef.current.focus()
    }

    return (
        <div className="toDoSection" style={{ padding: 20 }}>
            <input
                ref={jobRef}
                value={job}
                placeholder="Enter job..."
                onChange={e => dispatch(setJob(e.target.value))}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList_useReducer