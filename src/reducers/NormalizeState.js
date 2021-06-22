function NormalizeState(state) { 
    let projectsById = {}
    let tasksById = {}

    state.map(project => {
        projectsById[project.id] = 
            {
                id: project.id,
                name: project.name,
                tasksIds: project.tasks.map(task => task.id)
            }
        })

    state.map(project => 
        project.tasks.map(task => tasksById[task.id] =
            {
                id: task.id,
                name: task.name,
                description: task.description,
                completed: task.completed,
                projectId: project.id,
            }
        )
    )

    const nstate = { 
        projectsById: projectsById,
        tasksById: tasksById,
      }

    return nstate
}

export default NormalizeState;