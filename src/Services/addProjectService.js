import { login, handleResponse, authHeader } from './helpers'
export const addProjectService = (request) => {
    const PROJECTS_API_ENDPOINT = "https://localhost:44367/api/projects"
    const parameters = {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify(request.project)
    }
    return fetch(PROJECTS_API_ENDPOINT, parameters)
      .then(response => {
        window.location.reload(true)
        return response.json()
      })
      .then(json => {
        return json
      })
  }