import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import emailPassword from './emailPasswordReducer'
import username from './usernameReducer'
import getProjects from './getProjectsReducer'
import addTask from './addTaskReducer'
import deleteTask from './deleteTaskReducer'
import editTask from './editTaskReducer'

const rootReducer = combineReducers({
  register, login, emailPassword, username, getProjects, addTask, deleteTask, editTask
});

export default rootReducer;