export const getTodos = () => async (dispatch) =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users/');
      const response = await data.json();
     dispatch({
         type: 'get_users',
         payload: response
     })
}