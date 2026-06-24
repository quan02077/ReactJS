import { useState, useEffect } from "react";

//1. useEffect(callback)
//- Gọi callback mỗi khi component re-render
//- Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//Chỉ gọi callback 1 lần khi component được mounted
//3. useEffect(callback, [deps])
//Chỉ gọi callback khi dependency thay đổi

//------
//1. Callback luôn được gọi sau khi component được mounted
const tabs = ['posts', 'comments', 'albums']
// function UseEffectExample() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     useEffect(() => {
//         // document.title = title
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type === tab ? { color: 'white', backgroundColor: '#333' } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <ul>
//                 {
//                     posts.map(post => (
//                         <li key={post.id}>{post.title || post.name}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// function UseEffectExample() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect(() => {
//         // document.title = title
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY >= 200) {
//                 setShowGoToTop(true)
//             }
//             else {
//                 setShowGoToTop(false)
//             }
//         }

//         window.addEventListener('scroll', handleScroll)

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type === tab ? { color: 'white', backgroundColor: '#333' } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <ul>
//                 {
//                     posts.map(post => (
//                         <li key={post.id}>{post.title || post.name}</li>
//                     ))
//                 }
//             </ul>
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: "fixed",
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go to top
//                 </button>
//             )}
//         </div>
//     )
// }

// function UseEffectExample() {
//     const [resize, setResize] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setResize(window.innerWidth)
//         }
//         window.addEventListener('resize', handleResize)
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, [])
//     return (
//         <div>
//             <h1>{resize}</h1>
//         </div>
//     )
// }

function UseEffectExample() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default UseEffectExample
