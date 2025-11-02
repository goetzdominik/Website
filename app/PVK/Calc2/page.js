'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (nextOp) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(nextOp);
    setWaitingForNewValue(true);
  };

  const calculateResult = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      case '%':
        return prev % current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    const currentValue = parseFloat(display);

    if (operation && previousValue !== null) {
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleToggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    calculator: {
      background: '#2d3436',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      width: '320px',
    },
    display: {
      background: '#1e272e',
      color: '#00d2d3',
      fontSize: '2.5rem',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'right',
      marginBottom: '20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontWeight: '600',
      letterSpacing: '1px',
      boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.5)',
    },
    buttons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
    },
    btn: {
      padding: '20px',
      fontSize: '1.3rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      background: '#636e72',
      color: 'white',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    btnFunction: {
      background: '#00b894',
    },
    btnOperator: {
      background: '#fd79a8',
      fontSize: '1.5rem',
    },
    btnZero: {
      gridColumn: 'span 2',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = '#74b9ff';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e, isFunction, isOperator) => {
    if (isFunction) e.target.style.background = '#00b894';
    else if (isOperator) e.target.style.background = '#fd79a8';
    else e.target.style.background = '#636e72';
    e.target.style.transform = 'translateY(0)';
  };

  const Button = ({ onClick, children, isFunction, isOperator, isZero }) => (
    <button
      onClick={onClick}
      style={{
        ...styles.btn,
        ...(isFunction ? styles.btnFunction : {}),
        ...(isOperator ? styles.btnOperator : {}),
        ...(isZero ? styles.btnZero : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(e) => handleMouseLeave(e, isFunction, isOperator)}
    >
      {children}
    </button>
  );

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <div style={styles.display}>{display}</div>
        
        <div style={styles.buttons}>
          <Button onClick={handleClear} isFunction>C</Button>
          <Button onClick={handleToggleSign} isFunction>+/−</Button>
          <Button onClick={handleBackspace} isFunction>⌫</Button>
          <Button onClick={() => handleOperation('÷')} isOperator>÷</Button>

          <Button onClick={() => handleNumberClick(7)}>7</Button>
          <Button onClick={() => handleNumberClick(8)}>8</Button>
          <Button onClick={() => handleNumberClick(9)}>9</Button>
          <Button onClick={() => handleOperation('×')} isOperator>×</Button>

          <Button onClick={() => handleNumberClick(4)}>4</Button>
          <Button onClick={() => handleNumberClick(5)}>5</Button>
          <Button onClick={() => handleNumberClick(6)}>6</Button>
          <Button onClick={() => handleOperation('-')} isOperator>−</Button>

          <Button onClick={() => handleNumberClick(1)}>1</Button>
          <Button onClick={() => handleNumberClick(2)}>2</Button>
          <Button onClick={() => handleNumberClick(3)}>3</Button>
          <Button onClick={() => handleOperation('+')} isOperator>+</Button>

          <Button onClick={() => handleNumberClick(0)} isZero>0</Button>
          <Button onClick={handleDecimal}>.</Button>
          <Button onClick={handleEquals} isOperator>=</Button>
        </div>
      </div>
    </div>
  );
}