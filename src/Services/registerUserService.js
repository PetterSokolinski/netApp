import { login, handleResponse, authHeader } from './helpers'
export const registerUserService = (request) => {
    const REGISTER_API_ENDPOINT = "https://localhost:44367/api/users"
    
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    }
  
    return fetch(REGISTER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json
      })
}