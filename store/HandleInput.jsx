import { wordsContext } from "../store/GuessedStatesContext"
import { useContext, useEffect } from "react"
import { FillTheArray } from "../store/ArrayFiller"
import jsonWords from "../db/wordleList.json"
import styles from "../components/styles/WordsGrid.module.css"

let pressedKey,
    isALetter,
    currentIteration = 0

function delete_last_letter(context) {
    if (currentIteration > 0) {
        document
            .querySelector(`.${styles.Warning}`)
            .classList.remove(`${styles.WarningActive}`)
        currentIteration -= 1
        let obj1 = structuredClone(context.currentWord)[currentIteration]
        obj1.letter = " "
        obj1.animation = ""
        context.currentWord[currentIteration] = obj1
        context.setCurrentWordTo([...context.currentWord])
    }
}

function add_letter(context, letter) {
    if (currentIteration < context.num_of_squares) {
        // context.currentWord[currentIteration].letter = `${letter}`
        let obj1 = structuredClone(context.currentWord)[currentIteration]
        obj1.letter = letter
        obj1.animation = "popAnimation"
        context.currentWord[currentIteration] = obj1
        context.setCurrentWordTo([...context.currentWord])
        currentIteration += 1
    }
}

function submit_word(context) {
    // TO DO

    // Handle if the the chars are not in the word

    // TO DO
    if (currentIteration == context.num_of_squares) {
        let correctWord = context.correctWord
        let wordGuess = context.currentWord
        let restOfTheWord = ""

        if (!jsonWords.includes(wordGuess.map((el) => el.letter).join(""))) {
            // console.log("Sorry Not on the list!")
            const currentRow = context.currentGuessRow.current
            currentRow.classList.add(styles.wordDoesNotExist)
            document
                .querySelector(`.${styles.Warning}`)
                .classList.add(`${styles.WarningActive}`)
            setTimeout(() => {
                currentRow.classList.remove(styles.wordDoesNotExist)
            }, 300)

            return 0
        }

        for (let i = 0; i < wordGuess.length; i++) {
            // Ver as letras verdes
            wordGuess[i].color = "#f0f0f0"
            if (wordGuess[i].letter == correctWord[i]) {
                wordGuess[i].color = "#6ab363"
            } else {
                restOfTheWord += correctWord[i]
            }
        }
        // The user got the Word Right!
        if (restOfTheWord.length == 0) {
            setTimeout(() => {
                context.setuserGuessedWordBoolTo((prev) => !prev)
            }, 350 * context.num_of_squares)
        }

        let wordGuessLength = wordGuess.length
        for (let i = 0; i < wordGuessLength; i++) {
            // Ver as letras amarelas
            if (
                wordGuess[i].letter != correctWord[i] &&
                restOfTheWord.includes(wordGuess[i].letter)
            ) {
                restOfTheWord = restOfTheWord.replace(wordGuess[i].letter, "")
                wordGuess[i].color = "#f2d347"
            }
        }
        // console.log(context.currentWord)
        currentIteration = 0
        // Update the array of guessed words
        context.guessedWords.push(wordGuess)
        context.setGuessedWordsTo([...context.guessedWords])

        // Set the current word to nothing
        context.currentWord = FillTheArray(context.num_of_squares)
        context.setCurrentWordTo([...context.currentWord])

        // Reduce the number of blank rows
        context.blankRowsArray.shift()
        context.setBlankRowsArrayTo([...context.blankRowsArray])
    }
}

function handleKeyDown(event, context) {
    pressedKey = event.key
    isALetter = /^[a-zA-Z]$/.test(pressedKey)

    if (isALetter) {
        add_letter(context, pressedKey)
    } else if (pressedKey.toLowerCase() == "backspace") {
        delete_last_letter(context)
    } else if (pressedKey.toLowerCase() == "enter") {
        submit_word(context)
    }
}

export default function HandleInput() {
    let context = useContext(wordsContext)
    useEffect(() => {
        document.addEventListener("keyup", () => handleKeyDown(event, context))
    }, [])
}
