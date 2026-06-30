import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Store/App'
import { StoreProvider } from './Store'

//fake comments

// function emitComment(id) {
//   setInterval(() => {
//     const event = new CustomEvent(`lesson-${id}`, {
//       detail: `Nội dung comment của lesson ${id}`
//     })

//     window.dispatchEvent(event)
//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
)
