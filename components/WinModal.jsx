import styles from "./styles/modals.module.css"

function WinModal() {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <h1>Win Modal</h1>
            </div>
        </div>
    )
}

export default WinModal
