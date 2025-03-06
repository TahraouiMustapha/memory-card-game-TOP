

export default function Card({style, dataObj, handleCardClick})  {
    return (
        <div className="card" 
        style={style} 
        data-id={dataObj.id}
        onClick={handleCardClick}>
            <div>
                <img src={dataObj.src} alt="pokemeon" style={{width: '100%'}}/>
            </div>
        </div>
    )
}