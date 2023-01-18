import styles from "./styles/WordsGrid.module.css"
import { wordsContext } from "../store/GuessedStatesContext"
import { useContext } from "react"
import HandleInput from "../store/HandleInput"
import Row from "./Row"
import BlankRow from "./BlankRow"
import GuessedRow from "./GuessedRow"

export default function WordsGrid({}) {
    const GuessedStatesContext = useContext(wordsContext)
    HandleInput()
    // console.log(GuessedStatesContext.correctWord)
    return (
        <div className={styles.WordsGrid}>
            {/* The already Guessed Words */}
            {GuessedStatesContext.guessedWords.map((word) => (
                <GuessedRow
                    num_of_squares={GuessedStatesContext.num_of_squares}
                    currentWord={word}
                />
            ))}
            {GuessedStatesContext.guessedWords.length !=
                GuessedStatesContext.num_of_rows && (
                <Row
                    num_of_squares={GuessedStatesContext.num_of_squares}
                    currentWord={GuessedStatesContext.currentWord}
                />
            )}
            {GuessedStatesContext.blankRowsArray.map(() => (
                <BlankRow
                    num_of_squares={GuessedStatesContext.num_of_squares}
                />
            ))}
        </div>
    )
}
