// pages/index.js
"use client";

import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [justEvaluated, setJustEvaluated] = useState(false);

  // ----- helpers --------------------------------------------------------------
  const compute = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return a / b;
      default:  return b;
    }
  };

  // ----- handlers -------------------------------------------------------------
  const onNumber = (num) => {
    if (justEvaluated) {
      setDisplay(num);
      setJustEvaluated(false);
    } else if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const onDecimal = () => {
    if (justEvaluated) {
      setDisplay("0.");
      setJustEvaluated(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const onOperator = (op) => {
    // If we already have a pending operation and the display hasn't changed
    // since the last operator, just replace the operator.
    const current = parseFloat(display);

    if (operator && prevValue !== null) {
      // A previous operation is pending → compute it first
      const result = compute(prevValue, current, operator);
      setPrevValue(result);
    } else {
      // First operator pressed
      setPrevValue(current);
    }

    setOperator(op);
    setJustEvaluated(false);

    // *** NEW: clear display so that the next number starts fresh ***
    setDisplay("0");
  };

  const onEquals = () => {
    if (!operator || prevValue === null) return;
    const current = parseFloat(display);
    const result = compute(prevValue, current, operator);
    setDisplay(String(result));
    setPrevValue(null);
    setOperator(null);
    setJustEvaluated(true);
  };

  const onClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setJustEvaluated(false);
  };

  const onBackspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // ----- render ---------------------------------------------------------------
  return (
    <div className="app">
      <h1>Next.js Calculator</h1>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="grid">
          <button className="span-2" onClick={onClear}>C</button>
          <button onClick={onBackspace}>&larr;</button>
          <button onClick={() => onOperator("÷")}>÷</button>

          <button onClick={() => onNumber("7")}>7</button>
          <button onClick={() => onNumber("8")}>8</button>
          <button onClick={() => onNumber("9")}>9</button>
          <button onClick={() => onOperator("×")}>×</button>

          <button onClick={() => onNumber("4")}>4</button>
          <button onClick={() => onNumber("5")}>5</button>
          <button onClick={() => onNumber("6")}>6</button>
          <button onClick={() => onOperator("-")}>-</button>

          <button onClick={() => onNumber("1")}>1</button>
          <button onClick={() => onNumber("2")}>2</button>
          <button onClick={() => onNumber("3")}>3</button>
          <button onClick={() => onOperator("+")}>+</button>

          <button onClick={onDecimal}>.</button>
          <button onClick={() => onNumber("0")}>0</button>
          <button className="span-2" onClick={onEquals}>=</button>
        </div>
      </div>

      {/* Scoped CSS – no external files needed */}
      <style jsx>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f0f4f8;
          font-family: system-ui, sans-serif;
          padding: 2rem;
        }

        .calculator {
          max-width: 260px;
          border: 2px solid #333;
          border-radius: 12px;
          background: #fafafa;
          padding: 0.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .display {
          font-size: 1.8rem;
          text-align: right;
          padding: 0.6rem;
          margin-bottom: 0.5rem;
          background: #222;
          color: #fff;
          border-radius: 6px;
          min-height: 50px;
          overflow-x: auto;
          word-wrap: break-word;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.4rem;
        }

        button {
          padding: 0.8rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 6px;
          background: #eee;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover { background: #ddd; }
        button:active { background: #ccc; }

        .span-2 { grid-column: span 2; }
      `}</style>
    </div>
  );
}
