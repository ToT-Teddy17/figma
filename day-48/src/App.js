import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Input from './component/Input';

export default function App() {
  const[text,setText]=useState('');
  function handleChange (e){
    setText(e.target.value);
  }

  return (
    <div className='Start'>
      
    <Input label='First'
    value={text}
    onChange={handleChange}></Input>





    
     <Input label='Second'
    value={text}
    onChange={handleChange}></Input>
    
      
    </div>
  )
}

 


