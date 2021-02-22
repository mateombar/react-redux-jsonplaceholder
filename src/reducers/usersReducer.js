import {GET_TODOS} from '../types/usersTypes';

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, users: action.payload}
            break;
    
        default: return state;
            break;
    }
}