
import classnames from "classnames/bind"
import React from 'react';
import { ThemeContext } from "../ToDoList/ThemeContext"
import styles from "./DoneButton.module.scss"
const cx = classnames.bind(styles)

function DoneButton({onClick}) {
  return(
  <ThemeContext.Consumer>
        {(theme) =>
          <button className={cx('done', `done-theme-${theme}`)} onClick={onClick}>
            Сделано
          </button>}
    </ThemeContext.Consumer>)
  }
  export default DoneButton;