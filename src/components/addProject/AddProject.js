
import classnames from "classnames/bind"

import React from 'react';

import { addProject } from "../../actions/actions";
import { connect } from "react-redux";

import styles from "./AddProject.module.scss"
const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchAddProject: (project) => dispatch(addProject(project))
});

class addproject extends React.Component{

  state = {
    newProject: {
      name: '',
    },
  }

  adding = () => {
    this.props.dispatchAddProject(this.state.newProject);
  };

  hadleChangeProject = (event) => {
    const { value } = event.currentTarget
    this.setState({
      newProject: {
        ...this.state.newProject,
        name: value
      }
    });
  }

  render() {
    return (
      <div className={cx("P")}>
        <input value={this.state.newProject.name} onChange={this.hadleChangeProject} placeholder="Название"></input>
        <button onClick={this.adding}>Добавить проект</button>
      </div>
    )
  }
}

const AddProject = connect(null, mapDispatchToProps)(addproject);
export default AddProject;