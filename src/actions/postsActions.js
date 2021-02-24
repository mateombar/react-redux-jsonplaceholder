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