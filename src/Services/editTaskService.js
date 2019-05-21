import { login, handleResponse, authHeader } from './helpers'
export const editTaskService = (request) => {
    const TASKS_API_ENDPOINT = "https://localhost:44367/api/tasks"
    const userId = JSON.parse(localStorage.getItem('user')).userId
    const data = {
      userId,
      ...request.task
    }
    const parameters = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(data)
    }
    return fetch(`${TASKS_API_ENDPOINT}/${request.task.taskId}`, parameters)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json
      })
  }