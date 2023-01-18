const confetti = require("canvas-confetti")
import { useEffect, useRef } from "react"
import styles from "./styles/canvas.module.css"

function ConfettiCanvas() {
    const myCanvas = useRef(null)

    useEffect(() => {
        let myConfetti = confetti.create(myCanvas.current, {
            resize: true,
            useWorker: true,
        })
        let duration = 2 * 1000
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min
        }

        let interval = setInterval(function () {
            let particleCount = 130
            // since particles fall down, start a bit higher than random
            myConfetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: {
                        x: randomInRange(0.1, 0.5),
                        y: Math.random() - 0.2,
                    },
                    colors: ["#6ab363", "#f2d347"],
                })
            )
            myConfetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: {
                        x: randomInRange(0.5, 0.9),
                        y: Math.random() - 0.2,
                    },
                    colors: ["#6ab363", "#f2d347"],
                })
            )
        }, 250)

        setTimeout(() => {
            clearInterval(interval)
        }, duration)
        // myConfetti({
        //     particleCount: 400,
        //     spread: 1000,
        //     origin: { y: 1 },
        // })
    }, [])

    return (
        <div>
            {/* <h1>ConfettiCanvas</h1> */}
            <canvas ref={myCanvas} className={styles.canvas}></canvas>
        </div>
    )
}

export default ConfettiCanvas
