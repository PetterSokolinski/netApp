import { login, handleResponse, authHeader } from './helpers'
export const getMeService = () => {
    const USERS_API_ENDPOINT = "https://localhost:44367/api/users"
    const userId = JSON.parse(localStorage.getItem('user')).userId
    const parameters = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${USERS_API_ENDPOINT}/${userId}`, parameters).then(handleResponse).then(data => {
      localStorage.setItem('user', JSON.stringify(data))
    })
}