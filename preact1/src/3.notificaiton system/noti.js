import React, { useState } from "react";
import SecondScreen from "./secondScreen";
import "./noti.css";
const Noti = () => {
  const [show, setShow] = useState(false);
  const [inputvalue, setInputValue] = useState("");
  const showNotificaiton = () => {
    setShow(true);
  };
  return (
    <div className={show?"maindivgrey":"maindiv"}>
      <div classname="form">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="enter your name"
        />

        <button onClick={() => showNotificaiton()}>submit</button>
        {show && (
          <SecondScreen inputvalue={inputvalue} setShow={setShow} />
        )}
      </div>
    </div>
  );
};

export default Noti;
