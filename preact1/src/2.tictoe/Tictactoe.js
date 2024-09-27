import React, { useState } from "react";
import "./tictactoe.css";
const Tictactoe = () => {
  const [varx, setVarx] = useState(false);
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);

  const [values, setaValues] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const markSquare = (ind) => {
    if (winner || draw) {
      return;
    }
    let newarr = [...values];
    if (newarr[ind] === null) {
      if (varx === true) {
        newarr[ind] = "0";
      } else {
        newarr[ind] = "x";
      }
    }
    setaValues(newarr);
    setVarx(!varx);
    checkWinner(newarr);
    console.log(values);
  };

  const checkWinner = (checkarr) => {
    let winnpatters = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of winnpatters) {
      let [a, b, c] = i;
      if (
        checkarr[a] !== null &&
        checkarr[a] == checkarr[b] &&
        checkarr[a] == checkarr[c]
      ) {
        setWinner(true);
      }

      for (let j = 0; j <= checkarr.length; j++) {
        var nullcount = 9;
        if (j !== null) {
          nullcount = nullcount - 1;
        }
      }
      if (nullcount === 0) {
        setDraw(true);
      }
    }
  };
  const resetGame = () => {
    setDraw(false);
    setWinner(false);
    setaValues([null, null, null, null, null, null, null, null, null]);
  };
  return (
    <div className="mainbox">
      {winner && !varx ? (
        <p>game over . 0 has won</p>
      ) : winner && varx ? (
        <p>game over . x has won</p>
      ) : (
        <p></p>
      )}
      {draw ? <p>game has been drawnn</p> : <p></p>}

      {winner && <button onClick={() => resetGame()}>reset</button>}

      <div className="row">
        <div className="box" onClick={() => markSquare(0)}>
          {values[0]}
        </div>
        <div className="box" onClick={() => markSquare(1)}>
          {values[1]}
        </div>
        <div className="box" onClick={() => markSquare(2)}>
          {values[2]}
        </div>
      </div>
      <div className="row">
        <div className="box" onClick={() => markSquare(3)}>
          {values[3]}
        </div>
        <div className="box" onClick={() => markSquare(4)}>
          {values[4]}
        </div>
        <div className="box" onClick={() => markSquare(5)}>
          {values[5]}
        </div>
      </div>
      <div className="row">
        <div className="box" onClick={() => markSquare(6)}>
          {values[6]}
        </div>
        <div className="box" onClick={() => markSquare(7)}>
          {values[7]}
        </div>
        <div className="box" onClick={() => markSquare(8)}>
          {values[8]}
        </div>
      </div>
    </div>
  );
};

export default Tictactoe;
