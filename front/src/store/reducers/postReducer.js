import {FETCH_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "../actions/postActions";

const initialState = {
    posts: [],
    post: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.payload};
        case FETCH_POST_SUCCESS:
            return {...state, post: action.payload};
        default:
            return state;
    }
};

export default postsReducer;