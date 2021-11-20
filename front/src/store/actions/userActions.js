import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, payload: user});
export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, payload: user});

export const registerUser = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users', userData);
            dispatch(registerUserSuccess(response.data.user.username));
            dispatch(historyPush('/'));
        } catch (e) {
            console.log(e)
        }
    };
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users/sessions', userData);
            console.log(response.data);
            dispatch(loginUserSuccess(response.data.user.username));
            dispatch(historyPush('/'));
        } catch (e) {
            console.log(e)
        }
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        await axiosApi.delete('/users/sessions');
        dispatch({type: LOGOUT_USER});
        dispatch(historyPush('/'));
    };
};