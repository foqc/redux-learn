import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, FETCH_CURRENT_USER_SUCCESS } from '../actions/actionTypes';
import sessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';
import history from '../history';

export function loginSuccess(user) {
    return { type: LOG_IN_SUCCESS, user };
}

export function loginError(error) {
    return { type: LOG_IN_FAILURE, error };
}

export function fetchCurrentUser(user) {
    return { type: FETCH_CURRENT_USER_SUCCESS, user };
}

export function loginUser(credentials) {
    return function (dispatch) {
        return sessionApi.login(credentials).then(response => {
            sessionStorage.setItem('jwt', response.token);
            dispatch(loginSuccess(response));
            history.push('/dashboard');
        }).catch(error => {
            throw (error);
        });
    };
}

export function fetchUser() {
    return function (dispatch) {
        return sessionApi.fetchCurrentUser().then(response => {
            dispatch(fetchCurrentUser(response));
        }).catch(error => {
            throw (error);
        });
    };
}

export function logOutUser() {
    auth.logOut();
    history.push('/');
    return { type: LOG_OUT };
}