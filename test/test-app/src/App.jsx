import { useState } from "react"

// Ex1: state cho việc counter
// function App() {
//   const [counter, setCounter] = useState(1);

//   function handleCounter() {
//     // setCounter(counter + 1);

//     // setState với callback
//     setCounter((prevState) => prevState + 1);
//   }

//   return (
//     <div className="App" style={{ padding: "20px" }}>
//       <h1>{counter}</h1>
//       <button onClick={handleCounter}>Click me!</button>
//     </div>
//   );
// }

// Ex2: state cho việc thử nghiệm tính tổng tiền orders list
// với việc truyền function vào initState để tránh việc gọi lại
// logic tính toán khi re-render
// const orders = [100, 200, 300];

// function App() {
//   const [total, setTotal] = useState(() => {
//     return orders.reduce((total, order) => total + order);
//   });

//   function handleGetTotal() {
//     setTotal(total + 68);
//   }

//   return (
//     <div className="App" style={{ padding: "20px" }}>
//       <h1>{total}</h1>
//       <button onClick={handleGetTotal}>Get Total!</button>
//     </div>
//   );
// }

// const price = [100, 200, 300]
function App() {

  const [info, setInfo] = useState({
    name: 'Minh Quân',
    age: 20,
    city: 'Tp.HCM'
  })

  function handleUpdate() {
    setInfo({
      ...info,
      bio: 'Messi is the GOAT ^^'
    })
  }

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>update</button>
    </div>
  )
}

export default App
