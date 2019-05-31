import { login, handleResponse, authHeader } from './helpers'
export const loginUserService = (request) => {
    const LOGIN_API_ENDPOINT = "https://localhost:44367/api/users/authenticate"
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    }
    return fetch(LOGIN_API_ENDPOINT, parameters)
      .then(handleResponse)
      .then(user => {
          if (user) {
              localStorage.setItem('user', JSON.stringify(user))
              window.location.reload(true)
          }
          return user
      })
  }