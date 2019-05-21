import { login, handleResponse, authHeader } from './helpers'
export const getProjectsService = () => {
    const PROJECTS_API_ENDPOINT = "https://localhost:44367/api/projects"
    const parameters = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(PROJECTS_API_ENDPOINT, parameters).then(handleResponse).then(data => {
      localStorage.setItem('projects', JSON.stringify(data))
    })
}