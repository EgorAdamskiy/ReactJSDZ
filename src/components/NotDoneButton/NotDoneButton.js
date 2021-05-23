
import classnames from "classnames/bind"
import React from 'react';
import { ThemeContext } from "../ToDoList/ThemeContext"
import styles from "./NotDoneButton.module.scss"
const cx = classnames.bind(styles)

function NotDoneButton({onClick}) {
  return(
    <ThemeContext.Consumer>
          {(theme) =>
            <button className={cx('notdone', `notdone-theme-${theme}`)} onClick={onClick}>
              Не Сделано!
            </button>}
      </ThemeContext.Consumer>)
  }
  export default NotDoneButton;