import { login, handleResponse, authHeader } from './helpers'
export const addTaskService = (request) => {
    const TASKS_API_ENDPOINT = "https://localhost:44367/api/tasks"
    const userID = JSON.parse(localStorage.getItem('user')).userId
    const data = {
      userID,
      ...request.task
    }
    const parameters = {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify(data)
    }
  
    return fetch(TASKS_API_ENDPOINT, parameters)
      .then(response => {
        console.log("asdasdas", response)
        return response.json()
      })
      .then(json => {
        return json
      })
  }