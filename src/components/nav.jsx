import brainIcon from "../assets/brainstorm.png"

export default function Nav() {
    return (
        <div className="nav">
            <Logo/>
        </div>
    )
}


function Logo() {
    return (
        <div className="logo">
            <p className="title">Memory Game</p>
            <img src={brainIcon} alt="logo icon" />
        </div>
    )
}