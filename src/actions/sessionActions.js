import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } from '../actions/actionTypes';
import sessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';
import history from '../history';

export function loginSuccess() {
    return { type: LOG_IN_SUCCESS };
}

export function loginError(error) {
    return { type: LOG_IN_FAILURE, error };
}

export function loginUser(credentials) {
    return function (dispatch) {
        return sessionApi.login(credentials).then(response => {
            sessionStorage.setItem('jwt', response.token);
            dispatch(loginSuccess());
            history.push('/books');
        }).catch(error => {
            throw(error);
        });
    };
}

export function logOutUser() {
    auth.logOut();
    history.push('/home');
    return { type: LOG_OUT };
}