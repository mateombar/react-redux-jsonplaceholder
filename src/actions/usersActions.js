import { GET_TODOS, LOADING, ERROR } from '../types/usersTypes';

export const getTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    })
    try {
        // await fetch('https://jsonplaceholder.typicode.com/users/')
        //     .then(response => {
        //         console.log(response.status);
        //         if (!response.ok) {
        //             throw new Error("HTTP status " + response.status);
        //         }
        //         return response.json()
        //     })
        //     .then(data => {
        //         dispatch({
        //             type: GET_TODOS,
        //             payload: data
        //         })
        //     })
        const myRequest = new Request('https://jsonplaceholder.typicode.com/users/');
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
            payload: 'Users information not found'
        })
    }
}