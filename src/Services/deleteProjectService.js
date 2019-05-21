import { login, handleResponse, authHeader } from './helpers'
export const deleteProjectService = (projectId) => {
    const PROJECTS_API_ENDPOINT = "https://localhost:44367/api/projects"
    const parameters = {
        method: 'DELETE',
        headers: authHeader()
    }
    return fetch(`${PROJECTS_API_ENDPOINT}/${projectId.projectId}`, parameters).then(handleResponse)
  }