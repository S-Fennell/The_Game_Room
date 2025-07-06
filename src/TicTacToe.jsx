import { useState, useEffect } from "react";
import Squares from "./Components/Squares";

export default function TicTacToe(){
  
    const [gameBoard, setGame] = useState(
       ["","","",//first row
        "","","",//second row
        "","",""]//third row
       );
    const [player, setPlayer] = useState("O")
    const [winnerIs, setWinner] = useState({winner: "", state: ""})

    useEffect(()=>{
        winner();
        if(player == "X"){
            setPlayer("O");
        }else if(player =="O"){
            setPlayer("X");
        };
    }, [gameBoard]);

      useEffect(()=>{
         tieCondition();
        if(winnerIs.state != ""){
            alert(`${winnerIs.winner} Is The Winner`)
        }
    }, [gameBoard])

       const pickSquare =(square)=>{
        setGame(gameBoard.map((choice, index)=>{
            if(index == square && choice == ""){
                return player
            }
            return choice;
        })
      );

    };

    const winConditions = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    const winner =()=>{
        winConditions.forEach((condition)=>{
            const playerOne = gameBoard[condition[0]];
            if(playerOne == "") return;
            let winner = true;
            condition.forEach((index)=>{
                if(gameBoard[index]!= playerOne){
                    winner = false
                }
            })
            if(winner){
                setWinner({winner: player, state: "Winner!"})
            }
        })
    };

    const tieCondition = () =>{
        let squarePicked = true;
        gameBoard.forEach((square)=>{
            if(square == ""){
                squarePicked = false
            }
        });
        if(squarePicked){
            setWinner({winner: "None", state: "It's a Tie"})
        }
    };

    const restart =()=>{
        setGame(
       ["","","",
        "","","",
        "","",""]
       );
       setPlayer("O")

    }

    return(
        <>
        <div className="game">
            <div className="board">
                <div className="row">
                    <Squares choice={gameBoard[0]} pickSquare={()=>{pickSquare(0)}}/>
                    <Squares choice={gameBoard[1]} pickSquare={()=>{pickSquare(1)}}/>
                    <Squares choice={gameBoard[2]} pickSquare={()=>{pickSquare(2)}}/>
                </div>
                <div className="row">
                    <Squares choice={gameBoard[3]} pickSquare={()=>{pickSquare(3)}}/>
                    <Squares choice={gameBoard[4]} pickSquare={()=>{pickSquare(4)}}/>
                    <Squares choice={gameBoard[5]} pickSquare={()=>{pickSquare(5)}}/>
                </div>
                <div className="row">
                    <Squares choice={gameBoard[6]} pickSquare={()=>{pickSquare(6)}}/>
                    <Squares choice={gameBoard[7]} pickSquare={()=>{pickSquare(7)}}/>
                    <Squares choice={gameBoard[8]} pickSquare={()=>{pickSquare(8)}}/>
                </div>
                <button className="restart" onclick={restart}>RESTART</button>
            </div>
         
        </div>
        </>
        
    )
}

