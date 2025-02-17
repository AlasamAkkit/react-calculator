import React, {useState} from "react";
import "./styles.css";

function App() {

  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "="){
      setDisplay(eval(display).toString());
    }
    else if (value === "C"){
      setDisplay("0");
    }
    else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="btn" onClick={() => handleButtonClick("7")}>7</button>
        <button className="btn" onClick={() => handleButtonClick("8")}>8</button>
        <button className="btn" onClick={() => handleButtonClick("9")}>9</button>
        <button className="btn operator" onClick={() => handleButtonClick("/")}>/</button>

        <button className="btn" onClick={() => handleButtonClick("4")}>4</button>
        <button className="btn" onClick={() => handleButtonClick("5")}>5</button>
        <button className="btn" onClick={() => handleButtonClick("6")}>6</button>
        <button className="btn operator" onClick={() => handleButtonClick("*")}>*</button>

        <button className="btn" onClick={() => handleButtonClick("1")}>1</button>
        <button className="btn" onClick={() => handleButtonClick("2")}>2</button>
        <button className="btn" onClick={() => handleButtonClick("3")}>3</button>
        <button className="btn operator" onClick={() => handleButtonClick("-")}>-</button>

        <button className="btn zero" onClick={() => handleButtonClick("0")}>0</button>
        <button className="btn" onClick={() => handleButtonClick(".")}>.</button>
        <button className="btn operator" onClick={() => handleButtonClick("+")}>+</button>
        <button className="btn equal" onClick={() => handleButtonClick("=")}>=</button>

        <button className="btn clear" onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
}

export default App;
