import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [output, setOutput] = useState('');

  // Function to calculate based on button clicked
  const calculate = (btnValue) => {
    if (btnValue === '=') {
      try {
        // Evaluate the expression in the output and set the result
        const result = eval(output.replace('%', '/100'));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error'); // Handle error if evaluation fails
      }
    } else if (btnValue === 'AC') {
      // Clear the output
      setOutput('');
    } else if (btnValue === 'DEL') {
      // Delete the last character from the output
      setOutput((prevOutput) => prevOutput.slice(0, -1));
    } else {
      // Append the button value to the output
      setOutput((prevOutput) => prevOutput + btnValue);
    }
  };

  // Function to handle button clicks
  const handleClick = (e) => {
    const btnValue = e.target.dataset.value;
    calculate(btnValue);
  };

  return (
    <div className="container">
      <input type="text" className="display" value={output} readOnly />
      <div className="buttons">
        <button onClick={handleClick} data-value="AC">AC</button>
        <button onClick={handleClick} data-value="DEL">DEL</button>
        <button onClick={handleClick} data-value="%">%</button>
        <button onClick={handleClick} data-value="/">/</button>
        <button onClick={handleClick} data-value="7">7</button>
        <button onClick={handleClick} data-value="8">8</button>
        <button onClick={handleClick} data-value="9">9</button>
        <button onClick={handleClick} data-value="*">*</button>
        <button onClick={handleClick} data-value="4">4</button>
        <button onClick={handleClick} data-value="5">5</button>
        <button onClick={handleClick} data-value="6">6</button>
        <button onClick={handleClick} data-value="-">-</button>
        <button onClick={handleClick} data-value="1">1</button>
        <button onClick={handleClick} data-value="2">2</button>
        <button onClick={handleClick} data-value="3">3</button>
        <button onClick={handleClick} data-value="+">+</button>
        <button onClick={handleClick} data-value="0">0</button>
        <button onClick={handleClick} data-value="00">00</button>
        <button onClick={handleClick} data-value=".">.</button>
        <button onClick={handleClick} data-value="=">=</button>
      </div>
    </div>
  );
}

export default Calculator;
