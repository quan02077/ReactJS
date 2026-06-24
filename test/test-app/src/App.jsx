import UseStateExample from "./use_State.jsx"
import UseEffectExample from "./useEffect.jsx"
import ToDoList from "./toDoList.jsx"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  let effectElement

  if (show) {
    effectElement = <UseEffectExample />
  }
  else {
    effectElement = null
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {effectElement}
    </div>
  )
}

export default App
