
import { useState } from 'react'

import './App.css'

import Update from './Update';
import Object from './Objects';


function App() {
  const [counter, setCounter] = useState(0);
  
 
  const handleClick = () => {
    setCounter(counter + 1)
    

    
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Button</button>

      <Update/>
      <Object/>
      </div>
      
      









  
    






  )
}



export default App


