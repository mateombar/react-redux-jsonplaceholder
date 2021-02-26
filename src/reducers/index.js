import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import tasksReducer from './tasksReducer';
import postsReducer from './postsReducer';
// Combine all the Reducer that our app needs

export default combineReducers({
    usersReducer,
    postsReducer,
    tasksReducer
});