  
import classnames from "classnames/bind"

import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import styles from "./Project.module.scss"
const cx = classnames.bind(styles)
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
const project = ({id, name, tasksIds, theme} ) => {

    const Button = (theme) => {
        return (
            <Link to={`/${id}`} className={cx('project', `project-theme-${theme}`)}> Перейти к списку задач
            </Link>
        )
    }

    return (

        <div>
          <h3>{name}</h3>
          <h4>Задач: {tasksIds.length}</h4>
          <Button theme={theme}/>
        </div>
    )
  }
  
  const Project = connect(mapStateToProps)(project);
  export default Project;