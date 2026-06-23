import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Xin chao anh em F8!</h1>
            <h2>Hello world!!!</h2>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)