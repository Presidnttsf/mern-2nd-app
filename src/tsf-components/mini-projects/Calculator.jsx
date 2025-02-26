import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="up-calc">
      <div className="calculator">
        <h2>Calculator</h2>
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <button key={item} onClick={() => (item === "=" ? calculateResult() : handleClick(item))}>
              {item}
            </button>
          ))}
          <button className="clear" onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
