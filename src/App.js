import { useState } from 'react';
import './App.css';
const App = ()=>{
  const [value,setvalue] = useState("");
  const gettingValues = (e)=>
  {
     setvalue(value.concat(e.target.value))
  }
  const final = ()=>{
    setvalue(eval(value))
  }
  const clear = ()=>{
    setvalue("")
  }
  return(<>
  <div className='calc'>
    <h2>Calculator</h2>
    <div className='grid1'>
  <form >
  <input type="text" value={value}></input>  
  <button onClick={clear} id="clear">C</button>
   </form>
  
   </div>
   <div className='left'>
   <div className='grid'>
  <button onClick={(e)=>gettingValues(e)} value="1">1</button>
  <button onClick={(e)=>gettingValues(e)} value="2">2</button>
  <button onClick={(e)=>gettingValues(e)} value="3">3</button>
  <button onClick={(e)=>gettingValues(e)} value="/">/</button>
  <button onClick={(e)=>gettingValues(e)} value="4">4</button>
  <button onClick={(e)=>gettingValues(e)} value="5">5</button>
  <button onClick={(e)=>gettingValues(e)} value="6">6</button>
  <button onClick={(e)=>gettingValues(e)} value="-">-</button>
  <button  onClick={(e)=>gettingValues(e)} value="7">7</button>
  <button  onClick={(e)=>gettingValues(e)} value="8">8</button>
  <button  onClick={(e)=>gettingValues(e)} value="9">9</button>
  <button onClick={(e)=>gettingValues(e)} value="+">+</button>
  <button  onClick={(e)=>gettingValues(e)} value=".">.</button>
  <button  onClick={(e)=>gettingValues(e)} value="0">0</button>
  <button onClick={(e)=>gettingValues(e)} value="*">*</button>
  <button onClick={final}>=</button>
  
  </div>
  </div>
  </div>
  </>)
}

export default App;
