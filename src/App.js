
import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function addition(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function subtraction(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function multiply(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult * 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Gary's "Simplest" Working Calculator</h1> 
      </div> 
      <form> 
        <p className="screen" ref={resultRef}>{result}</p> 
        <input className="input"
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type number here..." 
        /> 
        <button className="plus" onClick={addition}>add</button> 
        <button className="minus" onClick={subtraction}>subtract</button> 
        <button className="multy" onClick={multiply}>multiply</button> 
        <button className="divy" onClick={divide}>divide</button>
        <button className="resetInput" onClick={resetInput}>reset input</button> 
        <button className="resetResult" onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

