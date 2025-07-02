import '../index.css';

export default function Squares({choice, pickSquare}){

    return(
        <div className="squares" onClick={pickSquare}>
            {choice}
        </div>
    )
}