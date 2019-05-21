import { login, handleResponse, authHeader } from './helpers'
export const deleteTaskService = (taskId) => {
    const TASKS_API_ENDPOINT = "https://localhost:44367/api/tasks"
    const parameters = {
        method: 'DELETE',
        headers: authHeader()
    }

    return fetch(`${TASKS_API_ENDPOINT}/${taskId.taskId}`, parameters).then(handleResponse)
  }