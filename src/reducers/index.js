import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
// Combine all the Reducer that our app needs

export default combineReducers({
    usersReducer
});