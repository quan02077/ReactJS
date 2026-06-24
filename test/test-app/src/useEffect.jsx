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
//2. CleanUp function luôn được gọi trước khi component unmounted
//3. CleanUp function luôn được gọi trước khi callback được gọi (trừ lần unmounted)

// const tabs = ['posts', 'comments', 'albums']
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

// function UseEffectExample() {
//     const [countdown, setCountdown] = useState(180)

//     useEffect(() => {
//         const timerId = setInterval(() => {
//             setCountdown(prev => prev - 1)
//         }, 1000)
//         return () => clearInterval(timerId)
//     }, [])
//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }

// function UseEffectExample() {
//     const [previewAvatar, setPreviewAvatar] = useState('')

//     useEffect(() => {
//         return (() => {
//             if (previewAvatar) {
//                 URL.revokeObjectURL(previewAvatar.preview)
//             }
//             else {
//                 return
//             }
//         })
//     }, [previewAvatar])

//     const handelPreviewAvatar = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)
//         setPreviewAvatar(file)
//     }

//     let avatarElement

//     if (previewAvatar) {
//         avatarElement = <img src={previewAvatar.preview} alt='' width='80%' />
//     }
//     else {
//         avatarElement = null
//     }

//     return (
//         <div>
//             <input
//                 type="file"
//                 onChange={handelPreviewAvatar}
//             />
//             {avatarElement}
//         </div>
//     )
// }
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]
function UseEffectExample() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComments = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComments)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComments)
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}
                        style={
                            {
                                color: lessonId === lesson.id ? 'red' : '#333'
                            }
                        }
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectExample
