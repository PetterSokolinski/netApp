import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import emailPassword from './emailPasswordReducer'
import username from './usernameReducer'
import getProjects from './getProjectsReducer'
import addTask from './addTaskReducer'
import deleteTask from './deleteTaskReducer'
import editTask from './editTaskReducer'
import addProject from './addProjectReducer'
import getMe from './getMeReducer'
import deleteProject from './deleteProjectReducer'
import editProject from './editProjectReducer'
import assignProject from './assignProjectReducer'
const rootReducer = combineReducers({
  register, login, emailPassword, username, getProjects, addTask, deleteTask, editTask, addProject, getMe, deleteProject, editProject, assignProject
});

export default rootReducer;