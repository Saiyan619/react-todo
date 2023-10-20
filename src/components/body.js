import React from 'react'
import { useState } from 'react';
import TodoList from './todoList';


export default function Body() {
  const [lightMode, setLightMode] = useState(true);
  function toggleLightMode() {
    setLightMode(!lightMode);
  }
  return (

    <div className=  {lightMode ? "App" : ".App_active"}>
      <div className='app-body-container'>
        
          <div className='head-title-sun-toggle'>
                  <span className={lightMode ? 'app-name' : 'app-name_toggle'}>TODO</span>
            <img src= {lightMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}  alt='sun' onClick={toggleLightMode}/>
            </div>
                 
        <TodoList/>
         
          </div>
              
         
      </div>
      
  )
}
