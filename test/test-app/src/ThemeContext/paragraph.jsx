import { useContext } from "react"
import { ThemeContext } from './themeContext'

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Hello world!
        </p>
    )
}

export default Paragraph