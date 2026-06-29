import { useReducer, useRef } from "react";

const initialState = {
    job: '',
    jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }

        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }

        case DELETE_JOB:
            const newJob = [...state.jobs]

            newJob.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJob
            }

        default:
            throw new Error('Invalid action')
    }
}

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