import React, { useState,useEffect } from 'react';
import './App.css';



const UnitSquare = ({ key,value,changeItem }) => {
  return (<button className="square" key={key} onClick={changeItem}>{value}</button>)
}


const Title = ({ player }) => {
  return(<div class="status">Current player: {player}</div>)
}

const checkWin = (squares)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ( squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null
}

const App = () => {
    const [player, setList] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));


    const onAdd = (value) => {
      if(squares[value] != null){
        alert("這個格子已經被佔用了");

      }else{
        
        squares[value] = player;
        setSquares(squares);
        const result = checkWin(squares)//確認輸贏的function

        if(player ==='X'&& result === null){
          setList("O");
        }else if (player ==='O'&& result === null){
          setList("X")
        }else if(result !== null){
          setTimeout(()=>{
            alert("玩家 "+result+" 獲勝");
            setSquares(Array(9).fill(null));
            setList('X');
          },1

          )
        }
      }

    }


    return (
        <>
            <Title player={player} />
            <div>
         <div class="game">
            <div class="game-board">

              <div class="board-row">
                <UnitSquare key = '0' value = {squares[0]} changeItem={ () => onAdd('0')}/>
                <UnitSquare key = '1' value = {squares[1]} changeItem={ () => onAdd('1')}/>
                <UnitSquare key = '2' value = {squares[2]} changeItem={ () => onAdd('2')}/>
                </div>
                <div class="board-row">
                <UnitSquare key = '3' value = {squares[3]} changeItem={ () => onAdd('3')}/>
                <UnitSquare key = '4' value = {squares[4]} changeItem={ () => onAdd('4')}/>
                <UnitSquare key = '5' value = {squares[5]} changeItem={ () => onAdd('5')}/>
                </div>
                <div class="board-row">
                <UnitSquare key = '6' value = {squares[6]} changeItem={ () => onAdd('6')}/>
                <UnitSquare key = '7' value = {squares[7]} changeItem={ () => onAdd('7')}/>
                <UnitSquare key = '8' value = {squares[8]} changeItem={ () => onAdd('8')}/>
              </div>
          </div>
  </div>
  </div>
        </>
    );
}

export default App;