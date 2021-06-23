export const THEME = 'THEME'
export const STATUS = 'STATUS'
export const PROJECT = 'PROJECT'
export const TASK = 'TASK'

export const themeChange = theme => ({
  type: THEME,
  payload: theme
})

export const addProject = (newProject) => ({
  type: PROJECT,
  payload: newProject
})

export const addTask = (newTask) => ({
  type: TASK,
  payload: newTask
})

export const statusChange = (taskId) => ({
  type: STATUS,
  payload: taskId
})