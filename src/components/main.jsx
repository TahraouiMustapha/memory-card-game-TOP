import { useState } from "react"
import CardsContainer from "./cardsContainer"

function Result({score = 0}) {
    return (
        <div className="results">
            <h2>{`Score: ${score}`}</h2>
        </div>
    )
}

export default function Main() {
    const [score, setScore] = useState(0)


    return (
        <div className="main">
            <CardsContainer setScore={setScore} style={{marginTop: '32px'}}/>
            <Result score={score}/>
        </div>
    )
}