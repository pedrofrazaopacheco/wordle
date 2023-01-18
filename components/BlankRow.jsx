import styles from "./styles/WordsGrid.module.css"

function BlankRow({ num_of_squares }) {
    num_of_squares = Array.from(Array(num_of_squares).keys())
    return (
        <div className={styles.row}>
            {num_of_squares.map((square_num) => (
                <div className={styles.square} key={square_num}></div>
            ))}
        </div>
    )
}

export default BlankRow
