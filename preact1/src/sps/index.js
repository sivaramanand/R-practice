import React, { useState } from "react";
import paper from "./images/paper.jpg";
import rock from "./images/rock.jpg";
import scissors from "./images/scissors.jpg";
const SPS = () => {
  let cardarray = ["paper", "rock", "scissors"];
  let [computerChoice, setComputerChoice] = useState(null);
  let [userChoice, setUserChoice] = useState(null);
  let [computerScore, setComputerScore] = useState(0);
  let [userScore, setUserScore] = useState(0);
  let [winnermessage, setwinnermessage] = useState(null);
  let [endGame, setEndGame] = useState(false);

  const checkWinner = () => {
    if (userScore >= 5) {
      setwinnermessage("user has won");
      setEndGame(true);
    } else if (computerScore >= 5) {
      setwinnermessage("comnputer has won");
      setEndGame(true);
    }
  };
  const UserMove = (move) => {
    if (endGame === false) {
      setUserChoice(move);
      let computerMove = Math.floor(Math.random() * 3);
      let computerSelection = cardarray[computerMove];
      setComputerChoice(computerSelection); // Set the computer's move

      if (move === computerSelection) {
        // It's a tie, no one gets a point
        console.log("It's a tie! No points awarded.");
      } else if (move == "paper" && computerSelection == "rock") {
        setUserScore((prevScore) => prevScore + 1);
      } else if (move == "scissors" && computerSelection == "paper") {
        setUserScore((prevScore) => prevScore + 1);
      } else if (move == "rock" && computerSelection == "scissors") {
        setUserScore((prevScore) => prevScore + 1);
      } else if (computerSelection == "paper" && move == "rock") {
        setComputerScore((prevScore) => prevScore + 1);
      } else if (computerSelection == "scissors" && move == "paper") {
        setComputerScore((prevScore) => prevScore + 1);
      } else if (computerSelection == "rock" && move == "scissors") {
        setComputerScore((prevScore) => prevScore + 1);
      }
      checkWinner();
    }
  };
  return (
    <div>
      <p>Welcome to SPS,Make your move</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src={paper}
          onClick={() => UserMove("paper")}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          src={rock}
          onClick={() => UserMove("rock")}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          src={scissors}
          onClick={() => UserMove("scissors")}
          style={{ height: "100px", cursor: "pointer" }}
        />
      </div>
      <div>
        <div>you chose {userChoice}</div>{" "}
        <div>compuer chose {computerChoice}</div>
      </div>
      <div>
        <div>user score is {userScore}</div>{" "}
        <div>computerScore is {computerScore}</div>
        <div>{winnermessage}</div>
      </div>
    </div>
  );
};

export default SPS;
