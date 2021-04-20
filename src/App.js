import logo from './logo.svg';
import './App.css';
import React from 'react';


const Task = ({id, name, description, completed}) => {
const handleClick = () => {
const result = "Task id = " + id + " Status = " + completed
console.log(result)
}

return (
<div className="A">
<h1>{name}</h1>
<div>{description}</div>
<div>{completed}</div>
<button onClick={handleClick} className="B">{name}</button>
</div>
)
}


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
    ]
  }
 



render () {
return(
 <div>
   {this.state.tasks.map(mission => <Task id={mission.id} name={mission.name} description={mission.description} completed={mission.completed}></Task>)}
 </div>
)
}
}
const App = () => {
  return <MyTodoList />
}


export default App;
