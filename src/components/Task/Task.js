import './Task.css';
import React from 'react';
import DoneButton from "../NewDoneButton/DoneButton"
import NotButtonDone from "../NotDoneButton/NotDoneButton"

const Task = ({id, name, description, completed, HandleClick}) => {
    const handleClick = () => {
        HandleClick(id)
      }
    
    let button; 
    if (completed == true) {button = <DoneButton onClick={handleClick}/>} 
    else {button = <NotButtonDone onClick={handleClick}/>}
    return (
    <div className="A">
    <h1>{name}</h1>
    <div>{description}</div>
    <div>{completed}</div>
    {button}
    </div>
    )
    }
    export default Task;