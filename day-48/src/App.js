import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Input from './component/Input';
import Anime from './component/Anime';
import Button from './component/Button';
import TopAnime from './component/TopAnime';
import Exercises from './component/Exercises';

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
    <hr></hr>
    <br></br>
  

    <Anime/>
    <Button/>
    <TopAnime/>
    <Exercises/>
    
      
     </div>
  )
}

 


