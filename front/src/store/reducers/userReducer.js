import {LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_SUCCESS} from "../actions/userActions";

const initialState = {
    user: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {...state, user: action.payload, registerError: null};
        case LOGIN_USER_SUCCESS:
            console.log(action.payload)
            return {...state, loginError: null, loginLoading: false, user: action.payload};
        case LOGOUT_USER:
            return {...state, user: null};
        default:
            return state;
    }
};

export default usersReducer;