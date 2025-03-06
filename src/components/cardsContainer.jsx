import Card from "./card";
import { useEffect, useState } from "react";
import randomize from "./randomize";

// to manipulate the number of clicks on each card 
const mapForClicks = new Map();

// to remove later
const cardStyle = {
    width: '100px', height: '100px', margin: '5px'
    ,cursor:'pointer', backgroundColor: 'Highlight'
}

export default function CardsContainer({style, score,setScore, arrayOfData}) {
    const [cardsArray, setCardsArray] = useState([]);

    function handleCardClick(e) {
        const cardsId = e.currentTarget.dataset.id;
        if(!mapForClicks.has(cardsId)) {
            mapForClicks.set(cardsId, 1)
            setScore(prevScore => ({
                ...prevScore,
                current: prevScore.current + 1
            }))
        } else if(mapForClicks.get(cardsId) >= 1) {
            mapForClicks.clear() // to reset all the clicks 
            setScore(prevScore => ({
                current: 0, 
                best: prevScore.current > prevScore.best 
                    ? prevScore.current
                    : prevScore.best
            }))
        }

        
    }

    useEffect(()=> {
        setCardsArray(randomize(arrayOfData))
    }, [arrayOfData, score])

    return (
        <div className="cards-container" style={{...style, 
        minWidth: '300px', 
        display: 'flex', 
        justifyContent: 'space-around'}}>
            {cardsArray.map((data) => { 
                return <Card 
                style={cardStyle}
                key={data.id}
                dataObj={data}
                handleCardClick={handleCardClick}/>

                })}
        </div>
    )
} 