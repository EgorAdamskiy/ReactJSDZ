  
import classnames from "classnames/bind"

import React from 'react';
import { Link } from "react-router-dom";

import { ThemeContext } from "../ToDoList/ThemeContext"

import styles from "./Project.module.scss"
const cx = classnames.bind(styles)

const Project = ({id, name, tasksIds} ) => {

    const Button = (theme) => {
        return (
            <Link to={`/${id}`} className={cx('project', `project-theme-${theme}`)}> Перейти к списку задач
            </Link>
        )
    }

    return (
      <ThemeContext.Consumer>
        {(theme) =>
        <div>
          <h3>{name}</h3>
          <h4>Задач: {tasksIds.length}</h4>
          <Button theme={theme}/>
        </div>}
      </ThemeContext.Consumer>
    )
  }
  
export default Project;