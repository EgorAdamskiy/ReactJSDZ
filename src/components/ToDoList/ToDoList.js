import './ToDoList.css';
import React from 'react';
import Task from "../Task/Task"
import AddTask from "../AddTask/AddTask"


class MyTodoList extends React.Component {
    state = {
      tasks: [
        {
          id: 1,
          name: 'Сдать экзамен на военной кафедре',
          description: 'Просмотр лекций, поиск информации в интернете',
          completed: false,
        },
        {
          id: 2,
          name: 'Погулять',
          description: 'Собрать компанию и определить удобное для всех место встречи',
          completed: false,
        },
        {
          id: 3,
          name: 'Выйти на практику',
          description: 'Найти место работы, пройти интервью и получить оффер',
          completed: true,
        },
        {
          id: 4,
          name: 'Убраться дома',
          description: 'Пропылесосисть, протереть пыль, разобраться в комнатах',
          completed: true,
        },
        {
          id: 5,
          name: 'Сделать презентацию по мировой экономике',
          description: 'Поиск информации в Интернете, создание шаблона презентации, произвести расчеты',
          completed: false,
        },
        {
          id: 6,
          name: 'Выбрать город для поездки на праздники',
          description: 'Выбрать город примерно в 6-7 часах езды от Москвы для его посещения',
          completed: false,
        },
        {
          id: 7,
          name: 'Купить новые футбольные бутсы',
          description: 'Выбрать время для посещения магазина, взять с собой деньги и выбрать подходящую модель',
          completed: false,
        }
      ],
      newMission: {
        id: 8,
        name: "",
        description: "",
        completed: false,
      }
    }
  
  hadleChange1 = (event) => {
    const {value} = event.currentTarget
    this.setState({
    newMission: {
        ...this.state.newMission,
        name: value
    }
    });
  }
  hadleChange2 = (event) => {
    const {value} = event.currentTarget
    this.setState({
    newMission: {
        ...this.state.newMission,
        description: value
    }
    });
  }
  addtask =() => {
    this.setState((currentState) => {
      const newArr = [...currentState.tasks, this.state.newMission]
      return {
      tasks: newArr,
      newMission: {
      id: this.state.tasks.length +1,
      name: '',
      description: '',
      completed: false,
      }
      }
      }
    )
  }
  render () {
  return(
   <div >
      <header ><h1>Твои задания</h1></header>
      <div className="D">
        <h2>Сделай дело - гуляй смело!</h2>
        <AddTask value1={this.state.newMission.name} value2={this.state.newMission.description} 
        onChange1={this.hadleChange1} onChange2={this.hadleChange2} adding = {this.addtask}
        />
      </div>
     {this.state.tasks.map(mission => <Task id={mission.id} name={mission.name} description={mission.description} completed={mission.completed}></Task>)}
   </div>
  )
  }
  }

export default MyTodoList;