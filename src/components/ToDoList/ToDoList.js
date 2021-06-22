import classnames from "classnames/bind"
import React from 'react';
import Task from "../Task/Task"
import Project from '../Project/Project'
import AddTask from "../AddTask/AddTask"
import AddProject from "../addProject/AddProject"
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter } from "react-router-dom"

import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"
import NormalizeState from "../NormalizeState"
import styles from "./ToDoList.module.scss"
const cx = classnames.bind(styles)

const state = [
  {
    id: 1,
    name: 'Учеба',
    tasks: [
      {
        id: 1,
        name: 'Сдать экзамен на военной кафедре',
        description: 'Просмотр лекций, поиск информации в интернете',
        completed: false,
        projectId: 1
      },
      {
        id: 3,
        name: 'Выйти на практику',
        description: 'Найти место работы, пройти интервью и получить оффер',
        completed: true,
        projectId: 1
      },
      {
        id: 5,
        name: 'Сделать презентацию по мировой экономике',
        description: 'Поиск информации в Интернете, создание шаблона презентации, произвести расчеты',
        completed: false,
        projectId: 1
      }]
  },
  {
    id: 2,
    name: 'Жизнь',
    tasks: [
      {
        id: 2,
        name: 'Погулять',
        description: 'Собрать компанию и определить удобное для всех место встречи',
        completed: false,
        projectId: 2
      },
      {
        id: 4,
        name: 'Убраться дома',
        description: 'Пропылесосисть, протереть пыль, разобраться в комнатах',
        completed: true,
        projectId: 2

      },
      {
        id: 6,
        name: 'Выбрать город для поездки на праздники',
        description: 'Выбрать город примерно в 6-7 часах езды от Москвы для его посещения',
        completed: false,
        projectId: 2
      }]
  },
  {
    id: 3,
    name: 'Спорт',
    tasks: [
      {
        id: 7,
        name: 'Купить новые футбольные бутсы',
        description: 'Выбрать время для посещения магазина, взять с собой деньги и выбрать подходящую модель',
        completed: false,
        projectId: 3
      }]
  }
]

const normState = NormalizeState(state)

class MyTodoList extends React.Component {
  state = {
    projectsById: { ...normState.projectsById },
    tasksById: { ...normState.tasksById },
    newMission: {
      name: "",
      description: "",
      completed: false,
    },
    newProject: {
      name: '',
    },

    theme: DEFAULT_THEME
  }

  handleStatusChange = (id) => {
    this.setState((currentState) => {
      const task = this.state.tasksById[id]
      const newStatus = !(task['completed'])
      const updatedTask = { ...task, completed: newStatus }
      const newArr = { ...currentState.tasksById, [id]: updatedTask }
      return {
        tasksById: newArr
      }
    })
  }

  hadleChange1 = (event) => {
    const { value } = event.currentTarget
    this.setState({
      newMission: {
        ...this.state.newMission,
        name: value
      }
    });
  }

  hadleChangeProject = (event) => {
    const { value } = event.currentTarget
    this.setState({
      newProject: {
        ...this.state.newProject,
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
  addtask = () => {
    const task = this.state.newMission
    task['id'] = Object.keys(this.state.tasksById).length + 1
    task['completed'] = false
    const projectId = task['projectId']
    this.setState((currentState) => {
      if (currentState.newMission.name !== '') {
        const newArr = [...currentState.projectsById[projectId]['tasksIds'], task['id']]
        const tasksIds = { ...currentState.projectsById[projectId], ['tasksIds']: newArr }
        return {
          projectsById: { ...currentState.projectsById, [projectId]: tasksIds },
          tasksById: { ...currentState.tasksById, [task['id']]: task },
          newTask: {
            name: '',
            description: '',
            projectId: 0,
          }
        }
      }
    })
  }

  addproject = () => {
    const project = this.state.newProject
    project['id'] = Object.keys(this.state.projectsById).length + 1
    project['tasksIds'] = []

    this.setState((currentState) => {
      return {
        projectsById: { ...currentState.projectsById, [project['id']]: project },
        newProject: {
          name: '',
        }
      }
    })
  }

  handleThemeChange = event => {
    this.setState({ theme: event.target.value })
  }

  Theme = () => {
    return (
      <div className={cx("radios")}>
        <div>
          <input type="radio" name="theme" id="light" value="light"
            checked={this.state.theme === "light"} onChange={this.handleThemeChange}
          />
          <label htmlFor="light">light</label>
        </div>

        <div>
          <input type="radio" name="theme" id="dark" value="dark"
            checked={this.state.theme === "dark"} onChange={this.handleThemeChange}
          />
          <label htmlFor="dark">dark</label>
        </div>
      </div>)
  }

  Header = () => {
    return <header className={cx("header", `header-theme-${this.state.theme}`)}><h1>Твои задания</h1></header>
  }

  Tasks = ({ match }) => {
    const project = this.state.projectsById[(match.params.projectId)]
    this.state.newMission['projectId'] = match.params.projectId
    const check = Object.keys(this.state.projectsById)
    if (!check.includes((match.params.projectId)))
    {
      console.log(`С таким id ${match.params.projectId} не существует проект`)
      return <Redirect to="/" />
    }

    return (
      <div className={cx("D", `D-theme-${this.state.theme}`)}>
        <h2>Сделай дело - гуляй смело!</h2>
        <Link to={`/`}>Вернуться к списку проектов</Link>
        <AddTask value1={this.state.newMission.name} value2={this.state.newMission.description}
          onChange1={this.hadleChange1} onChange2={this.hadleChange2} adding={this.addtask}
        />
        {project.tasksIds.map(id => <Task id={this.state.tasksById[id].id}
          name={this.state.tasksById[id].name} description={this.state.tasksById[id].description}
          completed={this.state.tasksById[id].completed}
          HandleClick={this.handleStatusChange}></Task>)}
      </div>
    )
  }

  Projects = () => {
    return (
      <div className={cx("D", `D-theme-${this.state.theme}`)}>
        <h2>Сделай проект - гуляй смело!</h2>
        <AddProject value1={this.state.newProject.name}
          onChange1={this.hadleChangeProject} adding={this.addproject}
        />
        {Object.keys(this.state.projectsById).map(id => <Project id={id} name={this.state.projectsById[id].name}
          tasksIds={this.state.projectsById[id].tasksIds}></Project>)}

      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className={cx('container', `container-theme-${this.state.theme}`)}>
          <Route path="/" component={this.Theme} />
          <Route path="/" component={this.Header} />
          <ThemeContext.Provider value={this.state.theme}>
            <Switch>
              <Route exact path="/" component={this.Projects} />
              <Route path="/:projectId" component={this.Tasks} />

              <Redirect to="/" />
            </Switch>
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    )
  }
}

export default MyTodoList;