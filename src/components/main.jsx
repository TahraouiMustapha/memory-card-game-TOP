import { useState } from "react"
import CardsContainer from "./cardsContainer"

function Result({score = {current: 0}}) {
    return (
        <div className="results">
            <h2>{`Score: ${score.current}`}</h2>
            <h2>{`Best Score: 0`}</h2>
        </div>
    )
}

export default function Main() { 
    const [score, setScore] = useState({
        current: 0,
        best: 0
    })


    return (
        <div className="main">
            <CardsContainer setScore={setScore} style={{marginTop: '32px'}}/>
            <Result score={score}/>
        </div>
    )
}