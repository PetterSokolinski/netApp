import { login, handleResponse, authHeader } from './helpers'
export const assignProjectService = (projectId) => {
    const USERS_API_ENDPOINT = "https://localhost:44367/api/users"
    const userId = JSON.parse(localStorage.getItem('user')).userId
    const parameters = {
      method: 'POST',
      headers: authHeader()
    }
    return fetch(`${USERS_API_ENDPOINT}/addproject/${userId}/${projectId.projectId}`, parameters)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json
      })
  }