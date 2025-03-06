import { useEffect, useState } from "react"
import getImages from "./getImages"
import CardsContainer from "./cardsContainer"

function Result({score = {current: 0, best: 0}}) {
    return (
        <div className="results">
            <h2>{`Score: ${score.current}`}</h2>
            <h2>{`Best Score: ${score.best}`}</h2>
        </div>
    )
}

export default function Main() { 
    const [score, setScore] = useState({
        current: 0,
        best: 0
    })

    const [arrayOfImages, setArrayOfImages] = useState([])

    useEffect(()=> {
        const fetchImages = async ()=> {
            const myImages = await getImages()
            setArrayOfImages(myImages)
        }
        fetchImages()
    }, [])

    return (
        <div className="main">
            <CardsContainer 
            arrayOfImages = {arrayOfImages}
            setScore={setScore} 
            style={{marginTop: '32px'}}/>
            
            <Result score={score}/>
        </div>
    )
}