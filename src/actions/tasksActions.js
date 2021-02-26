import { GET_TODOS, LOADING, ERROR } from '../types/tasksTypes';

export const getTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    })
    try {
        const myRequest = new Request('https://jsonplaceholder.typicode.com/todos/');
        const response = await fetch(myRequest);
        console.log(response.status);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        const data = await response.json();
        dispatch({
            type: GET_TODOS,
            payload: data
        })
    } catch (error) {
        await dispatch({
            type: ERROR,
            payload: 'Tasks information not found'
        })
    }
}