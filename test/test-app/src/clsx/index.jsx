import clsx from 'clsx'
import styles from './index.module.css'

function Index() {
    const classes = clsx(styles.btn, 'btn', 'btn-primary')
    return (
        <button className={classes}>Click me!</button>
    )
}

export default Index