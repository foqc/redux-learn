import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.user, action = {}) {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            return { ...action.user, session: !!sessionStorage.jwt, loaded: true };
        case types.FETCH_CURRENT_USER_SUCCESS:
            return { ...state, ...action.user, session: !!sessionStorage.jwt, loaded: true };
        case types.LOG_OUT:
            return { session: !!sessionStorage.jwt, loaded: true };
        default:
            return state;
    }
}