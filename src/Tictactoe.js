import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function Tictactoe() {
  return (
    <div>
      <h1>Fun Game Tic-Tac-Toe</h1>
     
     <Board />
    </div>
  );
}
function Board(){
  const { width, height } = useWindowSize()
  const board1 =[null,null,null,null,null,null,null,null,null];
  const [board,setboard]=useState( board1)
  const [xturn,setxturn]=useState(true);
  const handleclick = (index)=>{
    console.log(index);
    const boardcopy = [...board];
    if( !Winnar && !boardcopy[index]){
    boardcopy[index]= xturn ? "X" : "O";
    setboard(boardcopy);
    setxturn(!xturn);
  }
 };
  const winner = (board) => {
    const lines=[
      [0, 1,2],
      [3, 4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i=0 ; i<lines.length ; i++){
      const [a,b,c]= lines[i];
      if(board[a] !== null && board[a] === board[b] && board[b]=== board[c]){
        console.log("Winner", board[a]);
        return board[a];
      }
     }
  };

  const Winnar = winner(board);
 
  return(
    <div className="board">
     {Winnar ? <Confetti
      width={width}
      height={height}
      gravity={0.09}
    /> : null}
     {board.map((val ,index)=> (<Gamebox value={val} onclick={()=> handleclick(index)}/>))}
     
      {Winnar ? <h1>Winner is {Winnar}</h1> : null}
      <button onClick={() => { setboard(board1); setxturn(true)}}>Restart</button>
    </div>
  );
}

function Gamebox({value , onclick}){
  // const [value,setvalue] = useState('');
  const style ={
    color : value=== "X" ? "green" : "red"
  }
  return(
    <div className="game-box" style={style} onClick={onclick} >
    {value}
      </div>
  );
}

