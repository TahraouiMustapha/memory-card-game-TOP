export default function Card(props)  {
    return (
        <div className="card" style={props.style}>
            <div>
                <img src="#" alt="pokemeon" style={{width: '100%'}}/>
            </div>
            <p className="name"></p>
        </div>
    )
}