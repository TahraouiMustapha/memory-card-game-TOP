import Card from "./card";


function createData(obj) {
    return {
        id: crypto.randomUUID(),
        obj: obj, // consider it content
    }
}

// to manipulate the number of clicks on each card 
const mapForClicks = new Map();

// to remove later
const cardStyle = {
    width: '100px', height: '100px', margin: '5px'
    ,cursor:'pointer', backgroundColor: 'Highlight'
}

export default function CardsContainer({style, setScore, arrayOfImages}) {

    const arrayOfData = arrayOfImages.map((imgObj)=> {
        return createData(imgObj)
    })

    console.log(arrayOfData[0].id)

    function handleCardClick(e) {
        const cardsId = e.target.dataset.id;
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

    return (
        <div className="cards-container" style={{...style, 
        minWidth: '300px', 
        display: 'flex', 
        justifyContent: 'space-around'}}>
            {arrayOfData.map( (data) => { 
                return <Card style={cardStyle}/>

                // return <div key={data.id} 
                //         data-id={data.id}
                //         style={cardStyle}
                //         onClick={handleCardClick}>{data.number}</div>
                })}
        </div>
    )
} 