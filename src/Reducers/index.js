import { combineReducers } from 'redux'
import registerUserReducer from './registerUserReducer'
import loginUserReducer from './loginUserReducer'
import resetEmailPasswordUsernameAction from './resetEmailPasswordUsernameAction'
import getProjectsReducer from './getProjectsReducer'
import addTaskReducer from './addTaskReducer'
import deleteTaskReducer from './deleteTaskReducer'
import editTaskReducer from './editTaskReducer'
import addProjectReducer from './addProjectReducer'
import deleteProjectReducer from './deleteProjectReducer'
import editProjectReducer from './editProjectReducer'
import assignProjectReducer from './assignProjectReducer'
import getMeReducer from './getMeReducer'
const rootReducer = combineReducers({
  registerUserReducer,
  loginUserReducer, 
  resetEmailPasswordUsernameAction,
  getProjectsReducer, 
  addTaskReducer, 
  deleteTaskReducer, 
  editTaskReducer, 
  addProjectReducer, 
  deleteProjectReducer, 
  editProjectReducer, 
  assignProjectReducer,
  getMeReducer
})

export default rootReducer