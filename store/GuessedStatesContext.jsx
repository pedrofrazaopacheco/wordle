import { useContext, useState } from "react"
import { createContext } from "react"
import { FillTheArray } from "../store/ArrayFiller"
import jsonWords from "../db/wordleList.json"
const correctWord =
    Array.from(jsonWords)[Math.floor(Math.random() * jsonWords.length)]

// import SelectWord from "./SelectWord"

let wordsContext = createContext({
    guessedWords: [],
    setGuessedWordsTo: () => {},
    currentWord: [],
    setCurrentWordTo: () => {},
    blankRowsArray: [],
    num_of_squares: 5,
    num_of_rows: 6,
    currentIteration: 0,
    setCurrentIterationto: () => {},
})

function GuessedStates({ children }) {
    const num_of_squares = 5
    const num_of_rows = 6

    const [guessedWords, setGuessedWordsTo] = useState([])
    const [currentWord, setCurrentWordTo] = useState(
        FillTheArray(num_of_squares)
    )
    const [userGuessedWordBool, setuserGuessedWordBoolTo] = useState(false)

    const userArray = Array(num_of_rows - 1).fill(" ", 0)
    const [blankRowsArray, setBlankRowsArrayTo] = useState(userArray)

    const Context = {
        guessedWords: guessedWords,
        setGuessedWordsTo: setGuessedWordsTo,
        currentWord: currentWord,
        setCurrentWordTo: setCurrentWordTo,
        blankRowsArray: blankRowsArray,
        setBlankRowsArrayTo: setBlankRowsArrayTo,
        num_of_squares: num_of_squares,
        num_of_rows: num_of_rows,
        correctWord: correctWord,
        userGuessedWordBool: userGuessedWordBool,
        setuserGuessedWordBoolTo: setuserGuessedWordBoolTo,
        // correctWord: "sixty",
    }

    return (
        <wordsContext.Provider value={Context}>
            {children}
        </wordsContext.Provider>
    )
}

export { wordsContext }
export default GuessedStates
