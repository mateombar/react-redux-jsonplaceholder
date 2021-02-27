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
        const tasks = {};
        // Travel inside the tasks object getted by the api
        data.forEach((task_item) => (
            // Stop in the user id object with id = userId
            tasks[task_item.userId] = {
                // replace with the old user id object with id = userId  (stay equal)
                ...tasks[task_item.userId],
                // Adding a new tasks object with key task_item.id
                [task_item.id]: {
                    ...task_item
                }
            }
        ))

        // const fomatTasks = data.reduce((accumulator, item) => {
        //     accumulator[item.userId] = { ...accumulator[item.userId], [item.id]: { ...item } }
        //     return accumulator;
        // }, [])

        dispatch({
            type: GET_TODOS,
            payload: tasks
        })
    } catch (error) {
        console.error(error.message);
        dispatch({
            type: ERROR,
            payload: 'Tasks information not found'
        })
    }
}