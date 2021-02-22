import { GET_TODOS } from '../types/usersTypes';

export const getTodos = () => async (dispatch) => {
    try {
        // throw Error('Bad :(')
        const data = await fetch('https://jsonplaceholder.typicode.com/users/');
        const response = await data.json();
        dispatch({
            type: GET_TODOS,
            payload: response
        })
    } catch (error) {
        console.error(error.message.message)
    }
}