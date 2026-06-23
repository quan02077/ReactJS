import { useState } from "react";

// function UseStateExample() {
//     const [counter, setCounter] = useState(0)

//     function handleIncrease() {
//         setCounter(counter + 1)
//     }

//     return (
//         <div className="App">
//             <h1>{counter}</h1>
//             <button onClick={handleIncrease}>Increase</button>
//         </div>
//     )
// }
//---------------------------------------------------------------------
//Kết hợp với callBack
// function UseStateExample() {
//     const [counter, setCounter] = useState(0)

//     function handleIncrease() {
//         setCounter(prevState => prevState + 1)
//     }

//     return (
//         <div className="App">
//             <h1>{counter}</h1>
//             <button onClick={handleIncrease}>Increase</button>
//         </div>
//     )
// }
//---------------------------------------------------------------------
// //Kết hợp callBack để tính toán
// const prices = [100, 200, 300]
// function UseStateExample() {
//     const [counter, setCounter] = useState(() => {
//         const total = prices.reduce((total, cur) => total + cur)
//         return total
//     })

//     function handleIncrease() {
//         setCounter(counter + 1)
//     }

//     return (
//         <div className="App">
//             <h1>{counter}</h1>
//             <button onClick={handleIncrease}>Increase</button>
//         </div>
//     )
// }

//---------------------------------------------------------------------
//Kết hợp callBack để tính toán
// function UseStateExample() {
//     const [info, setInfo] = useState({
//         name: 'Minh Quân',
//         age: 20,
//         city: 'Tp.HCM'
//     })

//     function handleUpdate() {
//         setInfo({
//             ...info,
//             bio: 'Messi is da GOAT'
//         })
//     }

//     return (
//         <div className="App">
//             <h1>{JSON.stringify(info)}</h1>
//             <button onClick={handleUpdate}>Update</button>
//         </div>
//     )
// }
//---------------------------------------------------------------------
//Nhận thưởng
// const gifts = [
//     'CPU i9',
//     'RGB Keyboard',
//     'RTX 5090'
// ]
// function UseStateExample() {
//     const [gift, setGift] = useState()

//     function randomGift() {
//         const randomIndex = Math.floor(Math.random() * gifts.length)
//         setGift(gifts[randomIndex])
//     }

//     return (
//         <div className="App">
//             <h1>{gift || 'Chưa có phần thưởng'}</h1>
//             <button onClick={randomGift}>Nhận thưởng</button>
//         </div>
//     )
// }
//---------------------------------------------------------------------
//Input với type là text
// function UseStateExample() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')

//     function submitBtn() {
//         console.log({
//             name,
//             email
//         })
//     }

//     return (
//         <div className="App">
//             <input
//                 type='text'
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <br />
//             <input
//                 type='email'
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <br />
//             <button onClick={submitBtn}>submit</button>
//         </div>
//     )
// }

//---------------------------------------------------------------------
//Radio
// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'Javascript'
//     },
//     {
//         id: 3,
//         name: 'ReactJS'
//     }
// ]
// function UseStateExample() {
//     const [checked, setChecked] = useState('')
//     function submitBtn() {
//         console.log({ id: checked })
//     }

//     return (
//         <div className="App">
//             {
//                 courses.map(course => (
//                     <div key={course.id}>
//                         <input
//                             type="radio"
//                             checked={checked === course.id}
//                             onChange={() => setChecked(course.id)}
//                         />
//                         {course.name}
//                     </div>
//                 ))
//             }
//             <br />
//             <button onClick={submitBtn}>submit</button>
//         </div>
//     )
// }

//---------------------------------------------------------------------
//Checkbox
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]
function UseStateExample() {
    const [checked, setChecked] = useState([])

    function handleChecked(id) {
        setChecked(prev => {
            const isChecked = prev.includes(id)

            if (isChecked) {
                return prev.filter(item => item !== id)
            }

            return [...prev, id]
        })
    }

    function submitBtn() {
        console.log({ id: checked })
    }

    return (
        <div className="App">
            {
                courses.map(course => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleChecked(course.id)}
                        />
                        {course.name}
                    </div>
                ))
            }
            <br />
            <button onClick={submitBtn}>submit</button>
        </div>
    )
}
export default UseStateExample
