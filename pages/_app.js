import "../styles/globals.css"
import GuessedStates from "../store/GuessedStatesContext"

function MyApp({ Component, pageProps }) {
    return (
        <GuessedStates>
            <Component {...pageProps} />
        </GuessedStates>
    )
}

export default MyApp
