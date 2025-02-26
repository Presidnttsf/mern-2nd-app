import React, { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      if (input.trim() === "" || /[\+\-\*\/]$/.test(input)) {
        setInput("Error");
        return;
      }
      setInput((prev) => prev + " = " + eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      
      if (/[\d+\-*/.]/.test(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        event.preventDefault(); // Prevent form submission if inside a form
        calculateResult();
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        clearInput();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="up-calc">
      <div className="calculator">
        <h2>Calculator with Keyboard</h2>
        <div className="display">
          <input style={{background: "green"}} type="text" value={input} readOnly />
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
