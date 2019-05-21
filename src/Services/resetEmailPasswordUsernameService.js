import { login, handleResponse, authHeader } from './helpers'
export const resetEmailPasswordUsernameService = (request) => {
    const RESET_EMAIL_API_ENDPOINT = "https://localhost:44367/api/users"
    const userId = JSON.parse(localStorage.getItem('user')).userId
    const data = {
      userId,
      ...request.user
    }
    const parameters = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(data)
    }
    return fetch(`${RESET_EMAIL_API_ENDPOINT}/${userId}`, parameters)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json
      })
  }