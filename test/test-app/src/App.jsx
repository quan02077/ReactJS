import UseStateExample from "./use_State.jsx"
import UseEffectExample from "./useEffect.jsx"
import ToDoList from "./toDoList.jsx"
import { use, useState } from "react"

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <UseEffectExample />}
    </div>
  )
}

export default App
