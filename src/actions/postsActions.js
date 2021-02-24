import { GET_BY_USER, LOADING, ERROR } from '../types/postsTypes';

export const getByUser = (userId) => async (dispatch, getState) => {
    // To access to the state of an reducer from an Action
    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;
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
        const post_updated = [
            ...posts, 
            data
        ]
        dispatch({
            type: GET_BY_USER,
            payload: post_updated
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}