import classnames from "classnames/bind"
import React from 'react';
import DoneButton from "../NewDoneButton/DoneButton"
import NotButtonDone from "../NotDoneButton/NotDoneButton"
import { ThemeContext } from "../ToDoList/ThemeContext"
import styles from "./Task.module.scss"
import { Link } from "react-router-dom";

const cx = classnames.bind(styles)

const Task = ({ id, name, description, completed, HandleClick }) => {
  const handleClick = () => {
    console.log({ id, name, description, completed })
    HandleClick(id)
  }

  let button;
  if (completed == true) { button = <DoneButton onClick={handleClick} /> }
  else { button = <NotButtonDone onClick={handleClick} /> }
  return (
    <ThemeContext.Consumer>
      {(theme) =>
        <div className={cx("A", `A-theme-${theme}`)}>
          <h1>{name}</h1>
          <div>{description}</div>
          <div>{completed}</div>
          {button}
        </div>}
    </ThemeContext.Consumer>
  )
}
export default Task;