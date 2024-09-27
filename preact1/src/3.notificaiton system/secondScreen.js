import React from "react";
import "./secondScreen.css";
const SecondScreen = ({ inputvalue, setShow }) => {
  const closedialog = () => {
    setShow(false);
  };
  return (
    <div className="mainsecondscreen">
      {inputvalue ? inputvalue : "No input provided"}{" "}
      <button onClick={() => closedialog()}>Close</button>
    </div>
  );
};

export default SecondScreen;
