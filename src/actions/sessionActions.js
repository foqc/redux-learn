import { LOG_IN_SUCCESS, LOG_OUT } from '../actions/actionTypes';
import sessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';


export function loginSuccess() {
    return { type: LOG_IN_SUCCESS };
}

export function loginUser(credentials) {
    return function (dispatch) {
        return sessionApi.login(credentials).then(response => {
            sessionStorage.setItem('jwt', response.jwt);
            dispatch(loginSuccess());
        }).catch(error => {
            throw (error);
        });
    };
}

export function logOutUser() {
    auth.logOut();
    return { type: LOG_OUT };
}