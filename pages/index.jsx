import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import WordsGrid from "../components/WordsGrid"
import { wordsContext } from "../store/GuessedStatesContext"
import { FillTheArray } from "../store/ArrayFiller"
import styles from "../components/styles/WordsGrid.module.css"
import ConfettiCanvas from "../components/ConfettiCanvas"
import WinModal from "../components/WinModal"
import LostModal from "../components/LostModal"

export default function Home() {
    const context = useContext(wordsContext)
    // console.log(context.correctWord)

    return (
        <div>
            {!context.userGuessedWordBool && (
                <h1 className={styles.wordleTitle}>Wordle</h1>
            )}
            {context.userGuessedWordBool && (
                <h1 className={styles.congratulationsTitle}>
                    Congratulations!
                </h1>
            )}
            <div
                className={styles.Warning}
                style={{
                    width: `${
                        context.num_of_squares * 60 +
                        context.num_of_squares * 10 -
                        10
                    }px`,
                }}
            >
                Sorry! We don't have that word here!
            </div>
            <WordsGrid
                num_of_rows={context.num_of_rows}
                num_of_squares={context.num_of_squares}
            />
            {context.userGuessedWordBool && <ConfettiCanvas />}
            {/* <ConfettiCanvas /> */}
            {/* Show the Win Modal */}
            {/* <WinModal /> */}
            {/* Show the Lose Modal */}
            {/* <LostModal /> */}
            {/* Direct to Stats Page */}
        </div>
    )
}
