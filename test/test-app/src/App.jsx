import UseStateExample from "./use_State.jsx"
import UseEffectExample from "./useEffect.jsx"
import UseLayoutEffectExample from "./useLayoutEffect.jsx"
import UseRefExample from "./useRef.jsx"
import MemoExample from "./memo.jsx"
import UseCallBackExample from "./useCallBack.jsx"
import UseMemoExample from "./useMemo.jsx"
import UseReducerExample from "./useReducer.jsx"
import ToDoList from "./toDoList.jsx"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  let layoutElement

  if (show) {
    layoutElement = <UseReducerExample />
  }
  else {
    layoutElement = null
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {layoutElement}
    </div>
  )
}

export default App
