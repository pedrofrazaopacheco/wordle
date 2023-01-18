// import { useState, useEffect } from "react"
// const num_of_rows = 6
// const num_of_squares = 5

// function submitWord(word) {
//     currentWordsArray[currentRow] = Array.from(word)
//     setCurrentWordsArrayTo([...currentWordsArray])
// }

// let word = ""
// let char = ""
// let isALetter = false
// let currentRow = 0

// let emptyWord = Array.from(" ".repeat(num_of_squares))
// const emptyMatrix = Array(num_of_rows).fill(emptyWord)

// const [currentWordsArray, setCurrentWordsArrayTo] = useState(emptyMatrix)
// function handleKeyDown(e) {
//     char = e.key
//     isALetter = /^[a-zA-Z]$/.test(char)
//     if (isALetter) {
//         if (word.length < num_of_squares) {
//             word += e.key.toUpperCase()
//         }
//     } else if (char.toLowerCase() == "backspace") {
//         word = word.slice(0, -1)
//     } else if (char.toLowerCase() == "enter") {
//         if (word.length == num_of_squares) {
//             submitWord(word)
//             currentRow += 1
//             word = ""
//             return 0
//         }
//     }
//     submitWord(word)
// }

// export default function HandleInput() {
//     useEffect(() => {
//         document.addEventListener("keydown", handleKeyDown)
//     }, [])
// }

// export { currentWordsArray }

export function FillTheArray(num_of_squares) {
    const line = Array(num_of_squares).fill({
        letter: " ",
        // color: "#f5f5f5",
        color: "white",
        animation: "",
    })
    // const emptyMatrix = Array(num_of_rows).fill(line)
    return line
}
