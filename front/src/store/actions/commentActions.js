import axios from "axios";

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, payload: comments});
export const fetchCommentsFailure = () => ({type: FETCH_COMMENTS_FAILURE});

export const fetchComments = () => {
    return async dispatch => {
        try {
            dispatch(fetchCommentsRequest());
            const response = await axios.get('http://localhost:8000/comments');
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsFailure());
        }
    };
};
