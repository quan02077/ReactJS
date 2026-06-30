import video1 from './Download.mp4'
import { useImperativeHandle, useRef, forwardRef } from 'react'
function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
            ref={videoRef}
            src={video1}
            width={280}
        />
    )
}
export default forwardRef(Video)