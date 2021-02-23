import axios from 'axios';
import { GET_TODOS, LOADING, ERROR } from '../types/usersTypes';

export const getTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    })
    // await fetch('https://jsonplaceholder.typicode.com/usersSSS/')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         dispatch({
    //             type: GET_TODOS,
    //             payload: data
    //         })
    //     })
    //     .catch(error => {
    //         console.log('error??????????');
    //         dispatch({
    //             type: ERROR,
    //             payload: error.message
    //         })
    //     })
    try {
        // const data = await fetch('https://jsonplaceholder.typicode.com/usersSSS/');
        // const response = await data.json();
        const response = await axios.get('https://jsonplaceholder.typicode.com/usersS/')
        await dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    } catch (error) {
        await dispatch({
            type: ERROR,
            payload: error.message
        })
        console.log('error??????????');
    }
}