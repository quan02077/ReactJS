import { useState } from "react";

function ToDoList() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs || []
    })
    function handelAdd() {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }
    function handelDelete(jobDelete) {
        setJobs(prev => {
            const deleteJobs = prev.filter(item => item !== jobDelete)
            const jsonJobs = JSON.stringify(deleteJobs)
            localStorage.setItem('jobs', jsonJobs)
            return deleteJobs
        })
    }
    return (
        <div className="toDoSection" style={{ padding: 20 }}>
            <input
                type="text"
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handelAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => handelDelete(job)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
