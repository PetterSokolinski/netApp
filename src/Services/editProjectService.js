import { login, handleResponse, authHeader } from './helpers'
export const editProjectService = (request) => {
    const PROJECTS_API_ENDPOINT = "https://localhost:44367/api/projects"
    const parameters = {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(request.project)
    }
    return fetch(`${PROJECTS_API_ENDPOINT}/${request.project.projectId}`, parameters)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return json
      })
  }