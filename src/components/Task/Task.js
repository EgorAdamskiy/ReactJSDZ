import classnames from "classnames/bind"
import React from 'react';
import DoneButton from "../NewDoneButton/DoneButton"
import NotButtonDone from "../NotDoneButton/NotDoneButton"
import styles from "./Task.module.scss"

import { connect } from "react-redux";
import { statusChange } from "../../actions/actions";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projectsById: state.state.projectsById,
  tasksById: state.state.tasksById,
  theme: state.theme.theme,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchStatusChange: (taskId) => dispatch(statusChange(taskId))
});


const task = ({
  task,
  theme,
  dispatchStatusChange
}) => {

  const { id, name, description, completed } = task
  const handleClick = () => {
    dispatchStatusChange(id)
  }

  let button;
  if (completed == true) { button = <DoneButton onClick={handleClick} /> }
  else { button = <NotButtonDone onClick={handleClick} /> }
  return (
        <div className={cx("A", `A-theme-${theme}`)}>
          <h1>{name}</h1>
          <div>{description}</div>
          <div>{completed}</div>
          {button}
        </div> )
}

const Task = connect(mapStateToProps, mapDispatchToProps)(task);
export default Task;