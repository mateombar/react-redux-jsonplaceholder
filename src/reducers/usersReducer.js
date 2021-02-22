import { GET_TODOS, LOADING, ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
    users: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, users: action.payload, loading: false, error: '' };
            break;
        case LOADING:
            return { ...state, loading: true };
            break;
        case ERROR:
            return { ...state, users: [], error: action.payload, loading: false }
            break;
        default: return state;
    }
}