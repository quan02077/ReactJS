import UseStateExample from "./use_State.jsx"
import UseEffectExample from "./useEffect.jsx"
import UseLayoutEffectExample from "./useLayoutEffect.jsx"
import ToDoList from "./toDoList.jsx"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  let layouteffectElement

  if (show) {
    layouteffectElement = <UseLayoutEffectExample />
  }
  else {
    layouteffectElement = null
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {layouteffectElement}
    </div>
  )
}

export default App
