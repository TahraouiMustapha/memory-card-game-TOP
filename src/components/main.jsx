import { useEffect, useState } from "react"
import fetchData from "./getImages"
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

    const [arrayOfData, setArrayOfData] = useState([])

    useEffect(()=> {
        const fetchImages = async ()=> {
            const data = await fetchData();
            const imgs = data.map((obj)=>{
                return obj.sprites.front_default
            })
            // assign to each obj an id
            const myFinalArray = imgs.map((imgObj)=> {
                return createData(imgObj)
            })
            setArrayOfData(myFinalArray)
        }
        fetchImages()
    }, [])

    return (
        <div className="main">
            <CardsContainer 
            arrayOfData = {arrayOfData}
            setScore={setScore} 
            style={{marginTop: '32px'}}/>
            <Result score={score}/>
        </div>
    )
}

function createData(imgSrc) {
    return {
        id: crypto.randomUUID(), 
        src: imgSrc
    }
}