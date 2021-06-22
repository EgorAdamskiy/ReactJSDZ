import { THEME, PROJECT, TASK, STATUS } from "../actions/actions";
import NormalizeState from "./NormalizeState"

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

const normalizedProjects = NormalizeState(state)

const initialState = {
  theme: 'light',
  projectsById: { ...normalizedProjects.projectsById },
  tasksById: { ...normalizedProjects.tasksById }
}

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};


export const options = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT: {
      const project = action.payload
      project['id'] = Object.keys(state.projectsById).length + 1
      project['tasksIds'] = []
      return {
        ...state,
        projectsById: { ...state.projectsById, [project['id']]: project },
      }

    }

    case TASK: {
      const task = action.payload
      task['id'] = Object.keys(state.tasksById).length + 1
      task['completed'] = false
      const projectId = task['projectId']
      if (action.payload.name !== '') {
        const newArr = [...state.projectsById[projectId]['tasksIds'], action.payload.id]
        const newProj = { ...state.projectsById[projectId], ['tasksIds']: newArr }
        return {
          projectsById: { ...state.projectsById, [projectId]: newProj },
          tasksById: { ...state.tasksById, [task['id']]: action.payload },
        }
      }
    }

    case STATUS: {
      const task = state.tasksById[action.payload]
      if (task) {
        const newStatus = !(task['completed'])
        const updatedTask = { ...task, completed: newStatus }
        return {
          ...state,
          tasksById: { ...state.tasksById, [action.payload]: updatedTask }
        }
      }
    }

    default:
      return state
  }
}
