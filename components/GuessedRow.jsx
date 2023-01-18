import styles from "./styles/WordsGrid.module.css"

function GuessedRow({ num_of_squares, currentWord }) {
    num_of_squares = Array.from(Array(num_of_squares).keys())
    return (
        <div className={styles.row}>
            {num_of_squares.map((square_num) => {
                return (
                    <div
                        className={`${styles.cardContainer}  ${styles.FoldAnimation}`}
                        style={{
                            animationDelay: `${square_num * 400}ms`,
                        }}
                        key={square_num}
                    >
                        <div
                            className={`${styles.square} ${styles.frontCard}`}
                            style={{
                                backgroundColor: "white",
                            }}
                        >
                            {currentWord[square_num].letter}
                        </div>
                        <div
                            className={`${styles.square} ${styles.backCard}`}
                            style={{
                                backgroundColor: currentWord[square_num].color,
                            }}
                        >
                            {currentWord[square_num].letter}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GuessedRow
