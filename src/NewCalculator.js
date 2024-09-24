import React, { useState } from "react";
import './index.css';
import { Container } from "react-bootstrap";
const NewCalculator = () => {
  let [data, setData] = useState("");

  let [result, setResult] = useState("");

  function handleClick(value) {
    // setData(data + value);
setData((prev)=> result ? value : prev + value )
  }

  function handleSubmit() {
    let r = (calculation(data).toString());
    setData(r);
    setResult("")
  }

  function calculation(data) {
    let givenData = data.split(/[+\-*/]/);
    let givenSymbol = data.split(/[0-9.]+/).filter(Boolean);

    let Number1 = parseFloat(givenData[0]);

    for (let i = 1; i < givenData.length; i += 2) {
      let Number2 = parseFloat(givenData[i]);
      let sign = givenSymbol[i - 1];

      switch (sign) {
        case "+":
          Number1 += Number2;
          break;
        case "-":
          Number1 -= Number2;
          break;
        case "*":
          Number1 *= Number2;
          break;
        case "/":
          Number1 /= Number2;
          break;
        default:
          break;
      }
    }
    setResult(Number1);
    return Number1;
  }

  function handleClear() {
    setData("");
  }

  return (
    <Container className="buttons" style={{height:'200%'}}>
       <div className="nametag">

        <h2 className="calciname">CALCULATOR KAVI</h2>
        </div>
        
   <input
          type="text"
          style={{ marginBottom: "5px" }}
          value={result || data}
          className="inp1"></input>
    <div className='button1'>
  <button className='b1'onClick={() => handleClick(setData('1'))}>1</button>
  <button className='b1' onClick={() => handleClick('2')}>2</button>
  <button className='b1' onClick={() => handleClick('3')}>3</button>
  <button className='b1' onClick={() => handleClick('+')}>+</button>
  </div>
  <div className='button1'>
  <button className='b1' onClick={() => handleClick('4')}>4</button>
  <button className='b1' onClick={() => handleClick('5')}>5</button>
  <button className='b1'onClick={() => handleClick('6')}>6</button>
  <button className='b1' onClick={() => handleClick('-')}>-</button>
  </div>
  <div className='button1'>
  <button className='b1' onClick={() => handleClick('7')}>7</button>
  <button className='b1' onClick={() => handleClick('8')}>8</button>
  <button className='b1' onClick={() => handleClick('9')}>9</button>
  <button className='b1' onClick={() => handleClick('*')}>*</button>
  </div>
  <div className='button1'>
  <button className='b1' onClick={() => handleClick('0')}>0</button>
  <button className='b1' onClick={() => handleClick('.')}>.</button>
  <button className='b1' onClick={() => handleClear('C')}>C</button>
  <button className='b1' onClick={() => handleClick('/')}>/</button>
  
   
  </div>
  <div className='button2'>
  <button className='b2' onClick={() => handleSubmit('=')}>=</button>
  </div>
</Container>
  );
};

export default NewCalculator;