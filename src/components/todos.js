import React from "react";

export default function Todos(props) {
    return (
        <div>
                <div className='sub-list'>
            <div className='unit-todo'>
                <input type='checkbox' />
                <li>{props.name}</li>
            </div>
                
                <div className='cancel-con'><img src='./images/icon-cross.svg' alt='delete' onClick={() => {
                    props.delete(props.id);
                }}/></div>
            </div>
        </div>
    )
}