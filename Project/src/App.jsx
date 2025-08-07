import { useState } from "react";
import "./App.css";
import Display from "./components/Dispplay";
import CalculatorButton from "./components/CalculatorButton";
function App() {
  const buttons = [
    { label: "C", type: "red" },
    { label: "CE", type: "gray" },
    { label: "/", type: "gray" },
    { label: "*", type: "gray" },
    { label: "7", type: "gray" },
    { label: "8", type: "gray" },
    { label: "9", type: "gray" },
    { label: "-", type: "gray" },
    { label: "4", type: "gray" },
    { label: "5", type: "gray" },
    { label: "6", type: "gray" },
    { label: "+", type: "gray" },
    { label: "1", type: "gray" },
    { label: "2", type: "gray" },
    { label: "3", type: "gray" },
    { label: "=", type: "blue" },
    { label: "0", type: "gray" },
    { label: "00", type: "gray" },
    { label: ".", type: "gray" },
  ];
  const [display, setDisplay] = useState("");

  const handleClick = (label) => {
    if (label === "C") {
      setDisplay("");
    } else if (label === "CE") {
      setDisplay((prev) => prev.slice(0, -1));
    } else if (label === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => prev + label);
    }
  };
  return (
    <>
      <center>
        <div className="calculator">
          <Display value={display}></Display>

          <div className="container">
            {buttons.map((btn, keyidx) => (
              <CalculatorButton
                key={keyidx}
                label={btn.label}
                type={btn.type}
                onClick={handleClick}
              ></CalculatorButton>
            ))}
          </div>
        </div>
      </center>
    </>
  );
}
export default App;
