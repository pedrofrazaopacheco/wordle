import styles from "./styles/WordsGrid.module.css"
import { useRef, useContext } from "react"
import { wordsContext } from "../store/GuessedStatesContext"

function Row({ num_of_squares, currentWord }) {
    const GuessedStatesContext = useContext(wordsContext)
    num_of_squares = Array.from(Array(num_of_squares).keys())

    const currentGuessRow = useRef()
    GuessedStatesContext.currentGuessRow = currentGuessRow

    return (
        <div className={styles.row} ref={currentGuessRow}>
            {num_of_squares.map((square_num) => {
                return (
                    <div
                        className={`${styles.square} ${
                            styles[currentWord[square_num].animation]
                        }
                        `}
                        key={square_num}
                        style={{
                            backgroundColor: currentWord[square_num].color,
                        }}
                    >
                        {currentWord[square_num].letter}
                    </div>
                )
            })}
        </div>
    )
}

export default Row
