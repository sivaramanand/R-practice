import React, { useState, useEffect } from "react";
export const quizquestions = [
  {
    id: 1,
    questions: "1+1",
    options: ["2", "3", "4", "5"],
    answer: "2",
  },
  {
    id: 2,
    questions: "1+2",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    id: 3,
    questions: "1+3",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    id: 4,
    questions: "1+4",
    options: ["2", "3", "4", "5"],
    answer: "5",
  },
];

const QuizApp = () => {
  const [timer, setTimer] = useState(0);
  const [index, setIndex] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  // Timer logic - increment the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handling selected answer
  const selectedOption = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // Move to the next question and calculate the score
  const handleNext = () => {
    // Check if the selected answer is correct
    if (selectedAnswer === quizquestions[index].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    if (index < quizquestions.length - 1) {
      setIndex(index + 1);
      setSelectedAnswer(""); // Reset the selected answer for the next question
    } else {
      setLastQuestion(true); // End quiz
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div>Timer: {timer} seconds</div>
      {!lastQuestion ? (
        <div>
          <div>{quizquestions[index].questions}</div>
          <div>
            <select value={selectedAnswer} onChange={(e) => selectedOption(e)}>
              <option value="">Select an option</option>
              {quizquestions[index].options.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score is: {score} / {quizquestions.length}</p>
          <p>Total Time Taken: {timer} seconds</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
