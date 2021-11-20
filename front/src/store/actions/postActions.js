import axios from "axios";
import axiosApi from "../../axiosApi";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, payload: posts});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, payload: post});

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            };

            const response = await axiosApi.get('/posts', {headers});
            console.log(response.data)
            dispatch(fetchPostsSuccess(response.data));
        } catch (error) {
            if (error.response.status === 401) {
                console.log('you need authorization')
            } else {
                console.log(error)
            }
        }
    };
};

export const fetchPost = id => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:8000/Posts/' + id);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
                console.log(e)
        }
    };
};

export const createPost = PostData => {
    return async dispatch => {
        try {
            await axios.Post('http://localhost:8000/Posts', PostData);
        } catch (e) {
            console.log(e)
        }
    };
};