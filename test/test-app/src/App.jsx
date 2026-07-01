import UseStateExample from "./use_State.jsx"
import UseEffectExample from "./useEffect.jsx"
import UseLayoutEffectExample from "./useLayoutEffect.jsx"
import UseRefExample from "./useRef.jsx"
import MemoExample from "./memo.jsx"
import UseCallBackExample from "./useCallBack.jsx"
import UseMemoExample from "./useMemo.jsx"
import UseReducerExample from "./useReducer.jsx"
import ToDoList from "./toDoList.jsx"
import ToDoList_useReducer from "./ToDo/index.jsx"
// import Index from "./ThemeContext/index.jsx"
import Index from "./CssModules/index.jsx"
import Paragraph from "./CssModules/paragraph.jsx"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  let layoutElement
  let layoutElement2

  if (show) {
    layoutElement = <Index />
    layoutElement2 = <Paragraph />
  }
  else {
    layoutElement = null
    layoutElement2 = null
  }

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {layoutElement}
      {layoutElement2}
    </div>
  )
}

export default App
