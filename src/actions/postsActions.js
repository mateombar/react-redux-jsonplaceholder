import { UPDATE, LOADING, ERROR,COM_UPDATE, COM_LOADING, COM_ERROR } from '../types/postsTypes';
import * as usersTypes from '../types/usersTypes';

const { GET_TODOS: USERS_GET_TODOS } = usersTypes;


export const getByUser = (u_id) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    // To access to the state of an reducer from an Action
    const { users } = getState().usersReducer;
    const { posts } = getState().postsReducer;

    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${u_id}`)
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json();

        const news = data.map(post => (
            {
                ...post,
                comments: [],
                open: false
            }
        ));

        const post_updated = [
            ...posts,
            news
        ]
        dispatch({
            type: UPDATE,
            payload: post_updated
        });
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
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: "Posts not found"
        })
    }
}

export const openComments = (posts_id, post_index) => async (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const selected = posts[posts_id][post_index]

    const updated = {
        ...selected,
        open: !selected.open
    }

    const post_updated = [...posts]
    // post_updated[posts_id] = [...posts[posts_id]];
    post_updated[posts_id][post_index] = updated;

    dispatch({
        type: UPDATE,
        payload: post_updated
    });
}

export const getComments = (posts_id, post_index) => async (dispatch, getState) => {
    dispatch({
        type: COM_LOADING
    });
    const { posts } = getState().postsReducer;
    const selected = posts[posts_id][post_index]

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        const data = await response.json();
        const updated = {
            ...selected,
            comments: data
        }
        const post_updated = [...posts]
        post_updated[posts_id][post_index] = updated;

        dispatch({
            type: COM_UPDATE,
            payload: post_updated
        });
    } catch (error) {        
        console.log('oisadfsdfas');
        console.error(error.message)
        dispatch({
            type: COM_ERROR,
            payload: "Comments not found"
        })
    }


}