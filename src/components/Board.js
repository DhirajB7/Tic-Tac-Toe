import React, { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [values, setValues] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [isGameOn, setIsGameOn] = useState({ status: true, winner: "" });

  const handleClicked = (id) => {
    const squares = [...values];
    squares[id] = count % 2 === 0 ? "X" : "O";
    setCount(count + 1);
    setValues(squares);
  };

  useEffect(() => {
    const winner = calculateWinner();
    if (count === 9) {
        setIsGameOn({ ...isGameOn, status: false });
    }
    if (winner) {
      setIsGameOn({ winner, status: false });
    }
  }, [count]);

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        values[a] &&
        values[b] &&
        values[c] &&
        values[a] === values[b] &&
        values[b] === values[c]
      ) {
        return values[a];
      }
    }
    return null;
  };

  const startNewGame = () => {
    setValues(Array(9).fill(""));
    setCount(0);
    setIsGameOn({ status: true, winner: "" });
  };

  return (
    <>
      {isGameOn.status ? (
        <h1 className={count%2===0?"xColor":"oColor"}>Next Player : {count % 2 === 0 ? "X" : "O"}</h1>
      ) : isGameOn.winner ? (
        <h1 className={isGameOn.winner==="X"?"xColor":"oColor"}>Winner is : {isGameOn.winner}</h1>
      ) : (
        <h1 style={{color:'#DB7092'}}>GAME DRAW</h1>
      )}
      <div className="board">
        <Square id={0} handleClicked={handleClicked} value={values[0]} disabled={!isGameOn.status}/>
        <Square id={1} handleClicked={handleClicked} value={values[1]} disabled={!isGameOn.status}/>
        <Square id={2} handleClicked={handleClicked} value={values[2]} disabled={!isGameOn.status}/>
        <Square id={3} handleClicked={handleClicked} value={values[3]} disabled={!isGameOn.status}/>
        <Square id={4} handleClicked={handleClicked} value={values[4]} disabled={!isGameOn.status}/>
        <Square id={5} handleClicked={handleClicked} value={values[5]} disabled={!isGameOn.status}/>
        <Square id={6} handleClicked={handleClicked} value={values[6]} disabled={!isGameOn.status}/>
        <Square id={7} handleClicked={handleClicked} value={values[7]} disabled={!isGameOn.status}/>
        <Square id={8} handleClicked={handleClicked} value={values[8]} disabled={!isGameOn.status}/>
      </div>
        <button className="new-game" onClick={startNewGame} style={isGameOn.status?{visibility:"hidden"}:{visibility:"visible"}}>
          NEW GAME
        </button>
    </>
  );
};

export default Board;
