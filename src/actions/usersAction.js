import {GET_TODOS} from '../types/usersTypes';

export const getTodos = () => async (dispatch) =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users/');
      const response = await data.json();
     dispatch({
         type: GET_TODOS,
         payload: response
     })
}