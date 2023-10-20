import React from 'react'
import { useState } from 'react'
import Todos from './todos'


export default function TodoList(event) {
    const [inputText, setInputText] = useState('');
    const [todo, setTodo] = useState([]);
    const [numberOfTodos, setNumberOfTodos] = useState(0);
    const [lightMode, setLightMode] = useState(true);
    
    function toggleLightMode() {
      setLightMode(!lightMode);
    }

    function theInput(event) {
        let Ivalue = event.target.value;
        console.log(Ivalue);
        setInputText(Ivalue);
    }

    function addTodos(event) {
        if (event.key === 'Enter') {
            setTodo(prevTodos => {
                return [...prevTodos, inputText]
               
            })
            setInputText('')
            return setNumberOfTodos(numberOfTodos + 1)
        }
    };
    

    function deleteTodo(id) {
        setTodo(prev => {
            return prev.filter((todo, index) => {
                return index !== id;
            })
        }
            
        )
        return setNumberOfTodos(numberOfTodos - 1)
    };

    function deleteAll(id) {
        setTodo(prev => {
            return prev.filter((todo, index) => {
                return index === id;
            })
        }
        )
        return setNumberOfTodos(0);
    }
    

    return (
        <div>
             <div className='input-container'>         
                <input type='text' value={inputText} name='todo-input' placeholder='Type todo here..' className={lightMode ? 'main-input' : 'main-input_active'}  onChange={theInput} onKeyPress={addTodos}/> 
            </div> 
            
            <div className='the-list'>  
                <div className='sub--sub-list'>
                
                {todo.map ((todoItem, index )=> (
                    <Todos
                        key={index}
                        id={index}
                        name={todoItem}
                        delete={deleteTodo}
                    />
                ))} 
                    </div>
     
                  <div className='options'>
              <p>{numberOfTodos} items left</p>
              {/* <div className='sub-options'>
              <p>All</p>
                        <p>active</p>
              <p>Completed</p>
              </div> */}
              <p className='clear-all' onClick={deleteAll}>Clear Completed</p>
          </div> 
        </div>
        </div>
  )
}
 