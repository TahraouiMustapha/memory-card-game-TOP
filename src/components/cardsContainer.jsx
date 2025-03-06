
// fake data

function createData(number) {
    return {
        id: crypto.randomUUID(),
        number: number, // consider it content
    }
}
const arrayOfData = [
    createData(1), 
    createData(2), 
    createData(3), 
    createData(4), 
]

// to manipulate the number of clicks on each card 
const mapForClicks = new Map();

// to remove later
const cardStyle = {
    width: '32px',cursor:'pointer', textAlign: 'center', backgroundColor:'Highlight'
}

export default function CardsContainer({style, setScore}) {


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
        width: '300px', 
        display: 'flex', 
        justifyContent: 'space-around'}}>
            {arrayOfData.map( (data) => { 
                return <div key={data.id} 
                        data-id={data.id}
                        style={cardStyle}
                        onClick={handleCardClick}>{data.number}</div>
                })}
        </div>
    )
} 