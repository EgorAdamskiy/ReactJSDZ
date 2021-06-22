
import classnames from "classnames/bind"

import React from 'react';

import { addTask } from "../../actions/actions";
import { connect } from "react-redux";

import styles from "./AddTask.module.scss"
const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTask: (newTask) => dispatch(addTask(newTask)),
});

class addtask extends React.Component {
  state = {
    newMission: {
      name: '',
      description: '',
      projectId: this.props.projectId,
    }
  }

  adding = () => {
    this.props.dispatchAddTask(this.state.newMission);
  };

  hadleChange1 = (event) => {
    const { value } = event.currentTarget
    this.setState({
      newMission: {
        ...this.state.newMission,
        name: value
      }
    });
  }

  hadleChange2 = (event) => {
    const { value } = event.currentTarget
    this.setState({
      newMission: {
        ...this.state.newMission,
        description: value
      }
    });
  }

  render() {
    return (
      <div className={cx("C")}>
        <input value={this.state.name} onChange={this.hadleChange1} placeholder="Название"></input>
        <input value={this.state.description} onChange={this.hadleChange2} placeholder="Описание"></input>
        <button onClick={this.adding}>Добавить задачу</button>
      </div>
    )
  }
}

const AddTask = connect(null, mapDispatchToProps)(addtask);
export default AddTask;