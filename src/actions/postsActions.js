import { GET_TODOS, LOADING, ERROR } from '../types/postsTypes';
export const getTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/`)
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json();
        dispatch({
            type: GET_TODOS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const getByUser = (userId) => async (dispatch, getState) => {
    // To access to the state of an reducer from an Action
    const { users } = getState().usersReducer;
    const user_id = users[userId - 1].id;
    dispatch({
        type: LOADING
    })
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json();
        dispatch({
            type: GET_TODOS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}