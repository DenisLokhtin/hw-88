import {
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS
} from "../actions/commentActions";

const initialState = {
    fetchLoadingComments: false,
    comments: [],
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {...state, fetchLoadingComments: true};
        case FETCH_COMMENTS_SUCCESS:
            return {...state,  fetchLoadingComments: false, Comments: action.payload};
        case FETCH_COMMENTS_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    }
};

export default commentsReducer;