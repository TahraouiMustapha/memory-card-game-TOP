

export default function Card({dataObj, handleCardClick})  {
    return (
        <div className="card"  
        data-id={dataObj.id}
        onClick={handleCardClick}>
            <div>
                <img src={dataObj.src} alt="pokemeon" style={{width: '100%'}}/>
            </div>
        </div>
    )
}