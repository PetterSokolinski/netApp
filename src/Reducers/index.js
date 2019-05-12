import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import emailPassword from './emailPasswordReducer'
import username from './usernameReducer'


const rootReducer = combineReducers({
  register, login, emailPassword, username
});

export default rootReducer;