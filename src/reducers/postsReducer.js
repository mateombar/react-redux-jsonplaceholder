import { GET_TODOS, LOADING, ERROR } from '../types/postsTypes';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, posts: action.paylaod, error: '', loading: false }
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, posts: [], error: action.paylaod, loading: false }
        default: return state;
    }
}