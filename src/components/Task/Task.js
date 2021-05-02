import './Task.css';
import React from 'react';
const Task = ({id, name, description, completed}) => {
    const handleClick = () => {
    const result = "Task id = " + id + " Status = " + completed
    console.log(result)
    }
    
    return (
    <div className="A">
    <h1>{name}</h1>
    <div>{description}</div>
    <div>{completed}</div>
    <button onClick={handleClick} className="B">{name}</button>
    </div>
    )
    }
    export default Task;