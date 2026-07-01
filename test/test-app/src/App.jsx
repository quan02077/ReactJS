import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
// import UseStateExample from "./use_State.jsx"
// import UseEffectExample from "./useEffect.jsx"
// import UseLayoutEffectExample from "./useLayoutEffect.jsx"
// import UseRefExample from "./useRef.jsx"
// import MemoExample from "./memo.jsx"
// import UseCallBackExample from "./useCallBack.jsx"
// import UseMemoExample from "./useMemo.jsx"
// import UseReducerExample from "./useReducer.jsx"
// import ToDoList from "./toDoList.jsx"
// import ToDoList_useReducer from "./ToDo/index.jsx"
// import Index from "./ThemeContext/index.jsx"
// import Index from "./CssModules/index.jsx"
// import Paragraph from "./CssModules/paragraph.jsx"
// import Index from "./clsx/index.jsx"
// import { useState } from "react"

function App() {
  // const [show, setShow] = useState(false)

  // let layoutElement

  // if (show) {
  //   layoutElement = <Index />
  // }
  // else {
  //   layoutElement = null
  // }

  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      {layoutElement} */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
