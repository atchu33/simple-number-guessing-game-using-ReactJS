import logo from './logo.svg';
import './App.css';
import Result from './Result';
import { useState } from 'react';

const secretNum=Math.floor(Math.random()*10)+1

function App() {
  const [term,setTerm]=useState('');
  const handleChange=(e)=>{
       setTerm(e.target.value)
  }
  return (
    <div className="container">
        <div className='head'>
             <label htmlFor='text'>Guess the number between 1 to 10</label>
        </div>
        <input type="text" name="number" id="text" onChange={handleChange}></input>
        <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
