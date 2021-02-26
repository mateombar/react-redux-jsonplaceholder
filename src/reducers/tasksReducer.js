import { GET_TODOS, LOADING, ERROR } from '../types/tasksTypes';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, tasks: action.payload, loading: false, error: '' };
            break;
        case LOADING:
            return { ...state, loading: true };
            break;
        case ERROR:
            return { ...state, tasks: [], error: action.payload, loading: false }
            break;
        default: return state;
    }
}