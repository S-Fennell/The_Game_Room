import { useState } from "react";
import Squares from "./Components/Squares";

export default function TicTacToe(){
    const [gameBoard, setGame] = useState(
       ["","","",//first row
        "","","",//second row
        "","",""]//third row
       );

    return(
        <div className="game">
            <div className="board">
                <div className="row">
                    <Squares choice={gameBoard[0]} pickSquare={()=>{alert(0)}}/>
                    <Squares choice={gameBoard[1]} pickSquare={()=>{alert(1)}}/>
                    <Squares choice={gameBoard[2]} pickSquare={()=>{alert(2)}}/>
                </div>
                <div className="row">row2</div>
                <div className="row">row3</div>
            </div>
        </div>
    )
}

