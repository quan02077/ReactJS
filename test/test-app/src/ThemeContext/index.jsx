import Paragraph from "./paragraph"
import './index.css'
import { ThemeProvider, ThemeContext } from './themeContext'
import { useContext } from "react"

function ToggleButton() {
    const context = useContext(ThemeContext)

    return (
        <button onClick={context.handleTheme}>
            Toggle Theme
        </button>
    )
}

function Index() {
    return (
        <ThemeProvider>
            <ToggleButton />
            <Paragraph />
        </ThemeProvider>
    )
}

export default Index