import classnames from "classnames/bind"
import React from 'react';
import Task from "../Task/Task"
import Project from '../Project/Project'
import AddTask from "../AddTask/AddTask"
import AddProject from "../addProject/AddProject"
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"

import { themeChange } from "../../actions/actions";
import { connect } from "react-redux";

import styles from "./ToDoList.module.scss"
const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projectsById: state.state.projectsById,
  tasksById: state.state.tasksById,
  theme: state.theme.theme,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(themeChange(theme))
});

const List = ({
  projectsById,
  tasksById,
  theme,
  dispatchOnThemeChange,
}) => {

  const handleThemeChange = (e) => {
    dispatchOnThemeChange(e.target.value);
  };


  const Theme = () => {
    return (
      <div className={cx("radios")}>
        <div>
          <input type="radio" name="theme" id="light" value="light"
            checked={theme === "light"} onChange={handleThemeChange}
          />
          <label htmlFor="light">light</label>
        </div>

        <div>
          <input type="radio" name="theme" id="dark" value="dark"
            checked={theme === "dark"} onChange={handleThemeChange}
          />
          <label htmlFor="dark">dark</label>
        </div>
      </div>)
  }

  const Header = () => {
    return <header className={cx("header", `header-theme-${theme}`)}><h1>Твои задания</h1></header>
  }

  const Tasks = ({ match }) => {
    const project = projectsById[(match.params.projectId)]
    const check = Object.keys(projectsById)
    if (!check.includes((match.params.projectId))) {
      console.log(`С таким id ${match.params.projectId} не существует проект`)
      return <Redirect to="/" />
    }

    return (
      <div className={cx("D", `D-theme-${theme}`)}>
        <h2>Сделай дело - гуляй смело!</h2>
        <Link to={`/`}>Вернуться к списку проектов</Link>
        <AddTask projectId={match.params.projectId} />
        {project.tasksIds.map(id => <Task task={tasksById[id]}></Task>)}
      </div>
    )
  }

  const Projects = () => {
    return (
      <div className={cx("D", `D-theme-${theme}`)}>
        <h2>Сделай проект - гуляй смело!</h2>
        <AddProject/>
        {Object.keys(projectsById).map(id => <Project id={id} name={projectsById[id].name}
          tasksIds={projectsById[id].tasksIds}></Project>)}

      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className={cx('container', `container-theme-${theme}`)}>
        <Route path="/" component={Theme} />
        <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/:projectId" component={Tasks} />

            <Redirect to="/" />
          </Switch>
      </div>
    </BrowserRouter>
  )
}

const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(List)
export default MyTodoList