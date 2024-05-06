import styles from './Display.module.css'

let Display = ({ displayValue }) => {
    return <input className={styles.display} type="text" value={displayValue} readOnly />;
}

export default Display;