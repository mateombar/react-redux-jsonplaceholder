import { GET_BY_USER, LOADING, ERROR } from '../types/postsTypes';
import * as usersTypes from '../types/usersTypes';

const { GET_TODOS: USERS_GET_TODOS, ERROR: USERS_ERROR } = usersTypes;


export const getByUser = (u_id) => async (dispatch, getState) => {
    // To access to the state of an reducer from an Action
    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;

    dispatch({
        type: LOADING
    })
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${u_id}`)
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json();
        const post_updated = [
            ...posts,
            data
        ]
        const post_id = post_updated.length - 1
        const users_updated = [...users];
        users_updated[u_id - 1] = {
            ...users[u_id - 1],
            post_id
        }
        dispatch({
            type: USERS_GET_TODOS,
            payload: users_updated
        });
        dispatch({
            type: GET_BY_USER,
            payload: post_updated
        });
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error.message
        })
    }
}